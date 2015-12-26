package resources;

import faljseBlog.FaljseBlogApplication;
import faljseBlog.GSConfiguration;
import faljseBlog.Tools;
import objects.BlogEntry;
import views.EntriesView;

import javax.servlet.annotation.MultipartConfig;
import javax.ws.rs.*;
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

    @Path("/pub")
    public PublicResource getPublicResource() {
        return new PublicResource(configuration);
    }


}
