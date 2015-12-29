package views;

import faljseBlog.FaljseBlogApplication;
import faljseBlog.GSConfiguration;
import io.dropwizard.views.View;
import objects.BlogEntry;


/**
 * Created by Martin on 27.12.2015.
 */
public class BaseView extends View{
    private final GSConfiguration config;

    public String getBasePath()
    {
        return FaljseBlogApplication.getConfig().getBasePath();
    }
    BaseView(String templateName)
    {
        super(templateName);
        this.config=FaljseBlogApplication.getConfig();
    }
    public String toHtml(String text, BlogEntry e, String imgrString)
    {
        ViewTools.ImageRendering imgr = ViewTools.ImageRendering.valueOf(imgrString);
        return ViewTools.toHTML(text, e, imgr);
    }
    public String getTrackingScript()
    {
        return config.getTrackingScript();
    }
    public String getLinkFacebook()
    {
        return config.getLinkFacebook();
    }
    public String getLinkTwitter()
    {
        return config.getLinkTwitter();
    }
    public String getLinkGitHub()
    {
        return config.getLinkGitHub();
    }


    public String getBlogTitle()
    {
        return FaljseBlogApplication.getConfig().getBlogTitle();
    }

}
