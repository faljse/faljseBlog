package resources;

import faljseBlog.GSConfiguration;

import javax.servlet.annotation.MultipartConfig;
import javax.ws.rs.*;
import java.io.*;
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
