package resources;

import faljseBlog.FaljseBlogApplication;
import faljseBlog.GSConfiguration;
import faljseBlog.Tools;
import objects.BlogEntry;

import javax.servlet.annotation.MultipartConfig;
import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import java.io.*;
import java.nio.file.Files;
import java.util.List;
import java.util.UUID;


/**
 * Created by Martin on 24.10.2015.
 */
@Path("/")
@MultipartConfig(
        maxFileSize=1048576000,     // 10Mb max
        fileSizeThreshold=524288, //512 Kb before buffering to disk
        maxRequestSize=10240      // 10Kb of meta data
)
public class RootResource {
    private final GSConfiguration configuration;

    public RootResource(GSConfiguration configuration)
    {
        this.configuration=configuration;
    }

   @Path("/debug")
    public DebugResource getDebugResource() {
        return new DebugResource(configuration);
    }


    @Path("/admin")
    public AdminResource getAdminResource() {
        return new AdminResource(configuration);
    }

    @GET
    @Path("/image/{id}/{fileName}")
    @Produces("image/png")
    public InputStream getFileInputStream(@PathParam("id") int postID,
                                          @PathParam("fileName") String fileName){

        String fName= Tools.sanitizeFileName(fileName);
        java.nio.file.Path imageDir = Tools.getImageDir(configuration.getFaljseBlogDir(), postID);
        try {
            InputStream is = Files.newInputStream(imageDir.resolve(fName));
            return is;
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }


    @GET
    @Path("/entries.json")
    @Produces("application/json")
    public Response list() {
        List<BlogEntry> entries= FaljseBlogApplication.getStorage().getEntries();
        return Response.ok().status(200).entity(entries).build();
    }

//    @GET
//    @Path("/edit/{id}")
//    @Produces(MediaType.TEXT_HTML)
//    public EditorView getEditor(@PathParam("id") String id) {
//        return new EditorView(new Survey());
//    }

//    @GET
//    @Path("/survey/{id}")
//    @Produces(MediaType.TEXT_HTML)
//    public SurveyView getSurvey(@PathParam("id") String id) {
//        return new SurveyView(new Survey());
//    }


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


}
