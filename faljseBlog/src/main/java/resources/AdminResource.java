package resources;

import faljseBlog.FaljseBlogApplication;
import faljseBlog.GSConfiguration;
import objects.Blog;
import objects.BlogEntry;
import org.glassfish.jersey.media.multipart.FormDataContentDisposition;
import org.glassfish.jersey.media.multipart.FormDataParam;

import javax.ws.rs.*;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.io.*;
import java.nio.file.*;
import java.util.List;
import java.util.Map;
import java.util.UUID;

/**
 * Created by Martin on 29.10.2015.
 */
public class AdminResource {

    private final GSConfiguration config;

    public AdminResource(GSConfiguration configuration) {
        this.config=configuration;
    }


    @GET
    @Path("/list.json")
    @Produces("application/json")
    public Response list() {
        List<BlogEntry> entries=FaljseBlogApplication.getStorage().getEntries();
        return Response.ok().status(200).entity(entries).build();
    }

    @GET
    @Path("/read/{id}")
    @Produces("application/json")
    public Response read(@PathParam("id") int id) {
        BlogEntry e=FaljseBlogApplication.getStorage().getEntry(id);
        if(e==null)
            e=new BlogEntry();
        return Response.ok().status(200).entity(e).build();
    }

    @POST
    @Path("/write")
    @Produces("application/json")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response write(BlogEntry e) {
        FaljseBlogApplication.getStorage().write(e);

        return Response.ok().status(200).entity(e).build();
    }

    @POST
    @Path("/uploadImage")
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    public Response uploadImage(
            @FormDataParam("file") InputStream uploadedInputStream,
            @FormDataParam("file") FormDataContentDisposition fileDetail,
            @FormDataParam("entryID") int entryID) {

        BlogEntry e=FaljseBlogApplication.getStorage().getEntry(entryID);
        //String fileName=getUniqueFileName();
        if(e==null)
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).build();

        java.nio.file.Path imagesDir=getImageDir(config.getFaljseBlogDir(),e.getId());
        java.nio.file.Path imagesFile=imagesDir.resolve(sanitizeFileName(fileDetail.getFileName()));
        try {
            if(Files.notExists(imagesDir))
                Files.createDirectory(imagesDir);
            long res=Files.copy(uploadedInputStream, imagesFile);
            return Response.status(200).entity("OK "+res).build();

        } catch (IOException e1) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(e1).build();
        }
    }

    private static java.nio.file.Path getImageDir(String blogDir, int id)
    {
        java.nio.file.Path path = Paths.get(blogDir,
                String.valueOf(id),
                "images");
        try {
            if(Files.notExists(path))
            Files.createDirectory(path);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return path;
    }

    @GET
    @Path("/listImages/{id}")
    @Produces("application/json")
    public Response listImages(@PathParam("id") int id) {
        java.nio.file.Path imagesDir=getImageDir(config.getFaljseBlogDir(),id);
        String[] fileNames=imagesDir.toFile().list();
        return Response.ok().status(200).entity(fileNames).build();
    }

    private static String sanitizeFileName(String name)
    {
        StringBuilder filename = new StringBuilder();
        for (char c : name.toCharArray()) {
            if (c=='.' || Character.isJavaIdentifierPart(c)) {
                filename.append(c);
            }
        }
        return filename.toString();
    }

    // save uploaded file to new location
    private void writeToFile(InputStream uploadedInputStream,
                             String uploadedFileLocation) {

        try {
            OutputStream out = new FileOutputStream(new File(
                    uploadedFileLocation));
            int read = 0;
            byte[] bytes = new byte[1024];

            out = new FileOutputStream(new File(uploadedFileLocation));
            while ((read = uploadedInputStream.read(bytes)) != -1) {
                out.write(bytes, 0, read);
            }
            out.flush();
            out.close();
        } catch (IOException e) {

            e.printStackTrace();
        }

    }

    private static String getUniqueFileName() {
        return new StringBuilder().append("video_")
                .append(System.currentTimeMillis()).append(UUID.randomUUID())
                .append(".").toString();
    }

    private static String getUniqueFileName(String directory, String extension) {
        return new File(directory, new StringBuilder().append("video")
                .append(System.currentTimeMillis()).append(UUID.randomUUID())
                .append(".").append(extension).toString()).getAbsolutePath();
    }



    @POST
    @Path("/reset")
    @Produces("text/html")
    public Response reset() {

        
        return Response.ok().status(200).entity("OK").build();
    }

}
