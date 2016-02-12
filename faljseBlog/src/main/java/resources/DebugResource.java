package resources;

import faljseBlog.FaljseBlogApplication;

import faljseBlog.GSConfiguration;
import views.DebugView;

import javax.ws.rs.*;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.StreamingOutput;
import java.io.*;
import java.nio.channels.Channels;
import java.nio.channels.FileChannel;
import java.nio.channels.WritableByteChannel;
import java.util.Date;

/**
 * Created by Martin on 29.10.2015.
 */
public class DebugResource {

    private final GSConfiguration config;

    public DebugResource(GSConfiguration configuration) {
        this.config=configuration;
    }
    @GET
    @Path("/")
    @Produces(MediaType.TEXT_HTML)
    public DebugView getEditor(@PathParam("id") String id) {
        return new DebugView();
    }

    @POST
    @Path("/reset")
    @Produces("text/html")
    public Response reset() {
        return Response.ok().status(200).entity("OK").build();
    }

}
