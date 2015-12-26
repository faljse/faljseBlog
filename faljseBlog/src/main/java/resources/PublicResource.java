package resources;

import faljseBlog.FaljseBlogApplication;
import faljseBlog.GSConfiguration;
import faljseBlog.Tools;
import objects.BlogEntry;
import views.EntriesView;

import javax.servlet.annotation.MultipartConfig;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
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
public class PublicResource {
    private final GSConfiguration configuration;

    public PublicResource(GSConfiguration configuration)
    {
        this.configuration=configuration;
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
        List<BlogEntry> entries= FaljseBlogApplication.getStorage().getPublishedEntries();
        return Response.ok().status(200).entity(entries).build();
    }

    @GET
    @Path("/list")
    @Produces(MediaType.TEXT_HTML)
    public EntriesView getEntries() {
            return new EntriesView(FaljseBlogApplication.getStorage().getPublishedEntries());
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
