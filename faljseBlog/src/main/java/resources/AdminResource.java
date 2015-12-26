package resources;

import faljseBlog.FaljseBlogApplication;
import faljseBlog.GSConfiguration;
import faljseBlog.Tools;
import faljseBlog.auth.User;
import io.dropwizard.auth.Auth;
import objects.BlogEntry;
import org.glassfish.jersey.media.multipart.FormDataContentDisposition;
import org.glassfish.jersey.media.multipart.FormDataParam;
import views.EditView;

import javax.imageio.ImageIO;
import javax.ws.rs.*;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.awt.image.BufferedImage;
import java.io.*;
import java.nio.file.*;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import org.imgscalr.Scalr;

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
    public Response list(@Auth User user) {
        List<BlogEntry> entries=FaljseBlogApplication.getStorage().getEntries();
        return Response.ok().status(200).entity(entries).build();
    }

    @GET
    @Path("/read/{id}")
    @Produces("application/json")
    public Response read(@Auth User user,
                         @PathParam("id") int id) {
        BlogEntry e=FaljseBlogApplication.getStorage().getEntry(id);
        if(e==null)
            e=new BlogEntry();
        return Response.ok().status(200).entity(e).build();
    }

    @POST
    @Path("/write")
    @Produces("application/json")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response write(@Auth User user,
                          BlogEntry e) {
        FaljseBlogApplication.getStorage().upsert(e);
        return Response.ok().status(200).entity(e).build();
    }

    private void resizeImage(java.nio.file.Path containing, String filename)
    {
        try {
            BufferedImage bi= ImageIO.read(containing.resolve(filename).toFile());
            String formatSrc=filename.substring(filename.lastIndexOf('.')+1);

            java.nio.file.Path smallPath=containing.resolve("small");
            if(Files.notExists(smallPath))
                Files.createDirectory(smallPath);
            java.nio.file.Path mediumPath=containing.resolve("medium");
            if(Files.notExists(mediumPath))
                Files.createDirectory(mediumPath);
            java.nio.file.Path largePath=containing.resolve("large");
            if(Files.notExists(largePath))
                Files.createDirectory(largePath);

            BufferedImage small=Scalr.resize(bi, Scalr.Method.AUTOMATIC, Scalr.Mode.FIT_TO_WIDTH,1024);
            ImageIO.write(small,formatSrc,smallPath.resolve(filename).toFile());

            BufferedImage medium=Scalr.resize(bi, Scalr.Method.AUTOMATIC, Scalr.Mode.FIT_TO_WIDTH,1280);
            ImageIO.write(medium,formatSrc,mediumPath.resolve(filename).toFile());

            BufferedImage large=Scalr.resize(bi, Scalr.Method.AUTOMATIC, Scalr.Mode.FIT_TO_WIDTH,1920);
            ImageIO.write(large,formatSrc,largePath.resolve(filename).toFile());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @POST
    @Path("/uploadImage")
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    public Response uploadImage(
            //@Auth User user,
            @FormDataParam("file") InputStream uploadedInputStream,
            @FormDataParam("file") FormDataContentDisposition fileDetail,
            @FormDataParam("entryID") int entryID) {


        BlogEntry e=FaljseBlogApplication.getStorage().getEntry(entryID);
        //String fileName=getUniqueFileName();
        if(e==null)
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).build();
        String fileName= Tools.sanitizeFileName(fileDetail.getFileName());
        String suffix=fileName.substring(fileName.lastIndexOf("."));
        if(!(suffix.equalsIgnoreCase(".png")||
                suffix.equalsIgnoreCase(".jpg")||
                suffix.equalsIgnoreCase(".jpeg")||
                suffix.equalsIgnoreCase(".gif"))
                )
        {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).build();
        }

        java.nio.file.Path imagesDir=Tools.getImageDir(config.getFaljseBlogDir(),e.getId());
        java.nio.file.Path imagesFile=imagesDir.resolve(fileName);
        try {
            if(Files.notExists(imagesDir))
                Files.createDirectory(imagesDir);
            long res=Files.copy(uploadedInputStream, imagesFile);
            resizeImage(imagesDir, fileName);
            return Response.status(200).entity("OK "+res).build();

        } catch (IOException e1) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(e1).build();
        }
    }

    @GET
    @Path("/listImages/{id}")
    @Produces("application/json")
    public Response listImages(@Auth User user,
                               @PathParam("id") int id) {
        if(id<0)
            return Response.ok().status(200).entity(new ArrayList<String>()).build();
        java.nio.file.Path imagesDir=Tools.getImageDir(config.getFaljseBlogDir(),id);
        File[] files=imagesDir.toFile().listFiles();
        List<String> fileNames=new ArrayList<>();
        for(File f:files)
        {
            if(f.isFile())
                fileNames.add(f.getName());
        }
        return Response.ok().status(200).entity(fileNames).build();
    }

    @GET
    @Path("/edit/{id}")
    @Produces(MediaType.TEXT_HTML)
    public EditView getEditView(@Auth User user,
                                @PathParam("id") int id) {
        BlogEntry e= FaljseBlogApplication.getStorage().getEntry(id);
        if(e==null) {
            e = new BlogEntry();
            e.setId(-1);
            e.setText("");
            e.setTitle("");
        }
        List<BlogEntry> entries = FaljseBlogApplication.getStorage().getEntries();
        return new EditView(entries, e);
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
    public Response reset(@Auth User user) {

        
        return Response.ok().status(200).entity("OK").build();
    }

}
