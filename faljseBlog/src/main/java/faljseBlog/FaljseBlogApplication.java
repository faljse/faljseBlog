package faljseBlog;

import faljseBlog.auth.ExampleAuthorizer;
import faljseBlog.auth.SimpleAuthenticator;
import faljseBlog.auth.User;
import io.dropwizard.Application;
import io.dropwizard.assets.AssetsBundle;
import io.dropwizard.auth.AuthDynamicFeature;
import io.dropwizard.auth.AuthValueFactoryProvider;
import io.dropwizard.auth.basic.BasicCredentialAuthFilter;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import io.dropwizard.views.ViewBundle;
import org.eclipse.jetty.servlet.ServletHolder;
import org.eclipse.jetty.servlets.CrossOriginFilter;
import org.glassfish.jersey.media.multipart.MultiPartFeature;
import org.glassfish.jersey.server.filter.RolesAllowedDynamicFeature;
import resources.RootResource;

import javax.servlet.DispatcherType;
import javax.servlet.FilterRegistration;
import java.net.URL;
import java.net.URLClassLoader;
import java.nio.file.Paths;
import java.util.EnumSet;


/**
 * Created by Martin on 24.10.2015.
 */
public class FaljseBlogApplication extends Application<GSConfiguration> {

    private static Storage storage;
    private static GSConfiguration config;
    public static GSConfiguration getConfig() {
        return config;
    }
    public static Storage getStorage() {
        return storage;
    }

    static { /* force headless mode*/
        System.setProperty("java.awt.headless", "true");
        System.out.println("Headless: "+java.awt.GraphicsEnvironment.isHeadless());
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
        bootstrap.addBundle(new ViewBundle());
        //bootstrap.addBundle(new ViewBundle<GSConfiguration>());
        bootstrap.addBundle(new AssetsBundle("/assets", "/assets", "index.html"));
    }

    @Override
    public void run(GSConfiguration configuration,
                    Environment environment) {
        config=configuration;
        FaljseBlogApplication.storage=new Storage(Paths.get(configuration.getFaljseBlogDir()));


        //auth
        environment.jersey().register(RolesAllowedDynamicFeature.class);
        final BasicCredentialAuthFilter<User> userBasicCredentialAuthFilter =
                new BasicCredentialAuthFilter.Builder<User>()
                        .setAuthenticator(new SimpleAuthenticator())
                        .setRealm("Edit")
                        .setAuthorizer(new ExampleAuthorizer())
                        .buildAuthFilter();

        environment.jersey().register(new AuthDynamicFeature(userBasicCredentialAuthFilter));
        environment.jersey().register(new AuthValueFactoryProvider.Binder<>(User.class));
        //</auth>





        environment.jersey().setUrlPattern("/api/*");
        environment.jersey().register(new  RootResource(configuration));
        environment.jersey().register(MultiPartFeature.class);


        EntriesServlet e=new EntriesServlet();
        ServletHolder holderRoot = new ServletHolder("root", e);
        environment.getApplicationContext().addServlet(holderRoot,"/");



/*        ServletHolder holderHome = new ServletHolder("static-home", DefaultServlet.class);
        holderHome.setInitParameter("resourceBase",configuration.getStaticContentDir());
        holderHome.setInitParameter("dirAllowed","true");
        holderHome.setInitParameter("pathInfoOnly","true");
        environment.getApplicationContext().addServlet(holderHome,"*//*");*/

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
