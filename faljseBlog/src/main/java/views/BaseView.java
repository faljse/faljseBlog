package views;

import faljseBlog.FaljseBlogApplication;
import faljseBlog.GSConfiguration;
import io.dropwizard.views.View;
import objects.BlogEntry;
import org.parboiled.common.StringUtils;
import org.pegdown.*;
import org.pegdown.ast.AnchorLinkNode;
import org.pegdown.ast.ExpImageNode;
import org.pegdown.ast.RefImageNode;
import org.pegdown.ast.VerbatimNode;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import static org.pegdown.FastEncoder.*;


/**
 * Created by Martin on 27.12.2015.
 */
public class BaseView extends View{
    private final GSConfiguration config;
    private final static VerbatimSerializer prettifyVerbatimSerializer=new PrettifyVerbatimSerializer();
    private final static PegDownProcessor pdp=new PegDownProcessor(Extensions.ALL ^ Extensions.ANCHORLINKS);

    public String getBasePath()
    {
        return FaljseBlogApplication.getConfig().getBasePath();
    }
    public String getHostName()
    {
        return FaljseBlogApplication.getConfig().getHostName();
    }
    BaseView(String templateName)
    {
        super(templateName);
        this.config=FaljseBlogApplication.getConfig();
    }
    public String toHtml(String text, BlogEntry e, String imgrString)
    {

        org.pegdown.LinkRenderer linkRenderer= new MyLinkRenderer(e, ViewTools.ImageRendering.valueOf(imgrString));
        Map<String, VerbatimSerializer> map = Collections.singletonMap(
                VerbatimSerializer.DEFAULT,
                prettifyVerbatimSerializer);
        synchronized (pdp) {
            String html = BaseView.pdp.markdownToHtml(text,
                    linkRenderer,
                    map);
            return html;

        }
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

    private class MyLinkRenderer extends org.pegdown.LinkRenderer {
        private final ViewTools.ImageRendering imageRendering;
        private final BlogEntry blogEntry;

        MyLinkRenderer(BlogEntry e, ViewTools.ImageRendering imgr)
        {
            this.blogEntry=e;
            this.imageRendering=imgr;
        }

        @Override
        public Rendering render(ExpImageNode node, String text) {
            if(imageRendering== ViewTools.ImageRendering.SKIP)
                return new Rendering("","");

            String urlLarge=String.format("%sapi/pub/image/%s/large/%s",config.getBasePath(), blogEntry.getId(), node.url);
            String urlSmall=String.format("%sapi/pub/image/%s/large/%s",config.getBasePath(), blogEntry.getId(), node.url);
            Rendering rendering = new Rendering(urlSmall, text)
                    .withAttribute("class","jslghtbx-thmb")
                    .withAttribute("data-jslghtbx",urlLarge)
                    .withAttribute("data-jslghtbx-group",String.valueOf(blogEntry.getId()));
            return StringUtils.isEmpty(node.title) ? rendering : rendering.withAttribute("title", encode(node.title));
        }

        @Override
        public Rendering render(RefImageNode node, String url, String title, String alt) {
            Rendering rendering = new Rendering(url, alt);
            return StringUtils.isEmpty(title) ? rendering : rendering.withAttribute("title", encode(title));
        }

    }

    private static class PrettifyVerbatimSerializer implements VerbatimSerializer {

        @Override
        public void serialize(final VerbatimNode node, final Printer printer) {
            printer.println().print("<pre><code");
            String className = "prettyprint";
            if (!StringUtils.isEmpty(node.getType())) {
                className = className.concat(" " + node.getType());
            }
            printAttribute(printer, "class", className);
            printer.print(">");
            String text = node.getText();
            // print HTML breaks for all initial newlines
            while (text.charAt(0) == '\n') {
                printer.print("<br/>");
                text = text.substring(1);
            }
            printer.printEncoded(text);
            printer.print("</code></pre>");

        }



        private void printAttribute(final Printer printer, final String name, final String value) {
            printer.print(' ').print(name).print('=').print('"').print(value).print('"');
        }
    }

}
