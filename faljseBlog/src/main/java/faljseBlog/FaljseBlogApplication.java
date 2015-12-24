package faljseBlog;
import com.google.common.base.Charsets;
import io.dropwizard.Application;
import io.dropwizard.assets.AssetsBundle;

import io.dropwizard.servlets.assets.AssetServlet;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import io.dropwizard.views.ViewBundle;
import org.eclipse.jetty.servlet.DefaultServlet;
import org.eclipse.jetty.servlet.FilterHolder;
import org.eclipse.jetty.servlet.ServletHolder;
import org.eclipse.jetty.servlets.CrossOriginFilter;
import org.glassfish.jersey.media.multipart.MultiPartFeature;
import resources.RootResource;

import javax.servlet.DispatcherType;
import javax.servlet.FilterRegistration;
import javax.servlet.ServletRegistration;
import java.net.URL;
import java.net.URLClassLoader;
import java.nio.file.Paths;
import java.util.EnumSet;


/**
 * Created by Martin on 24.10.2015.
 */
public class FaljseBlogApplication extends Application<GSConfiguration> {

    private static Storage storage;

    public static Storage getStorage() {
        return storage;
    }

    public static void main(String[] args) throws Exception {
        //printClassPath();
        new FaljseBlogApplication().run(args);
    }


    @Override
    public String getName() {
        return "hello-world";
    }

    @Override
    public void initialize(Bootstrap<GSConfiguration> bootstrap) {
        //bootstrap.addBundle(new ViewBundle<GSConfiguration>());
        //bootstrap.addBundle(new AssetsBundle("/assets", "/", "index.html"));
    }

    @Override
    public void run(GSConfiguration configuration,
                    Environment environment) {
        FaljseBlogApplication.storage=new Storage(Paths.get(configuration.getFaljseBlogDir()));

        environment.jersey().setUrlPattern("/api/*");
        environment.jersey().register(new  RootResource(configuration));
        environment.jersey().register(MultiPartFeature.class);

        ServletHolder holderHome = new ServletHolder("static-home", DefaultServlet.class);
        holderHome.setInitParameter("resourceBase",configuration.getStaticContentDir());
        holderHome.setInitParameter("dirAllowed","true");
        holderHome.setInitParameter("pathInfoOnly","true");
        environment.getApplicationContext().addServlet(holderHome,"/*");

        configureCors(environment);


    }


    private void configureCors(Environment environment) {
        FilterRegistration.Dynamic filter = environment.servlets().addFilter("CORS", CrossOriginFilter.class);
        filter.addMappingForUrlPatterns(EnumSet.allOf(DispatcherType.class), true, "/*");
        filter.setInitParameter(CrossOriginFilter.ALLOWED_METHODS_PARAM, "GET,PUT,POST,DELETE,OPTIONS");
        filter.setInitParameter(CrossOriginFilter.ALLOWED_ORIGINS_PARAM, "*");
        filter.setInitParameter(CrossOriginFilter.ACCESS_CONTROL_ALLOW_ORIGIN_HEADER, "*");
        //filter.setInitParameter("allowedHeaders", "Content-Type,Authorization,X-Requested-With,Content-Length,Accept,Origin");
        filter.setInitParameter("allowedHeaders", "*");
        filter.setInitParameter("allowCredentials", "true");
        filter.addMappingForUrlPatterns(EnumSet.allOf(DispatcherType.class), true, "/*");
    }

    private static void printClassPath()
    {

        ClassLoader cl = ClassLoader.getSystemClassLoader();

        URL[] urls = ((URLClassLoader)cl).getURLs();

        for(URL url: urls){
            System.out.println(url.getFile());
        }

    }
}
