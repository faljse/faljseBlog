package views;

import faljseBlog.FaljseBlogApplication;
import io.dropwizard.views.View;
import objects.BlogEntry;

/**
 * Created by Martin on 27.12.2015.
 */
public class BaseView extends View{
    public String getBasePath()
    {
        return FaljseBlogApplication.getConfig().getBasePath();
    }
    BaseView(String templateName)
    {
        super(templateName);
    }

    public String toHtml(String text, BlogEntry e) {
        return ViewTools.toHTML(text, e);
    }
}