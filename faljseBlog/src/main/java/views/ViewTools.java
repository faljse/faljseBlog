package views;

import faljseBlog.FaljseBlogApplication;
import faljseBlog.GSConfiguration;
import objects.BlogEntry;
import org.tautua.markdownpapers.HtmlEmitter;
import org.tautua.markdownpapers.Markdown;
import org.tautua.markdownpapers.ast.*;
import org.tautua.markdownpapers.parser.ParseException;
import org.tautua.markdownpapers.parser.Parser;

import java.io.StringReader;
import java.io.StringWriter;

/**
 * Created by Martin on 27.12.2015.
 */
public class ViewTools {
    public enum ImageRendering{SKIP, LIGHTBOX, PLAIN}

    public static String toHTML(String markdown, BlogEntry e, ImageRendering imgr)
    {
        if(markdown==null)
            return "";
        Markdown md = new Markdown();
        StringWriter sw=new StringWriter();
        Visitor v=new Asd(sw, e, imgr);
        Parser parser = new Parser(new StringReader(markdown));
        try {
            Document doc = parser.parse();
            doc.accept(v);
        } catch (ParseException e1) {
            e1.printStackTrace();
        }
        return sw.toString();
    }
    private static class Asd extends HtmlEmitter
    {
        private BlogEntry e;
        private ImageRendering imgr;
        public Asd(Appendable buffer, BlogEntry e, ImageRendering imgr)
        {
            super(buffer);
            this.e=e;
            this.imgr=imgr;
        }

        public void visit(Code node) {
            append("<pre class=\"prettyprint\"><code>");
            visitChildrenAndAppendSeparator(node, '\n');
            append("</code></pre>");
            append('\n');
        }

        public void visit(CodeSpan node) {
            append("<code>");
            escapeAndAppend(node.getText());
            append("</code>");
        }

        public void visit(CodeText node) {
            escapeAndAppend(node.getValue());
        }

        @Override
        public void visit(Image node) {
            if(imgr==ImageRendering.SKIP)
                return;
            Resource resource = node.getResource();
            GSConfiguration config = FaljseBlogApplication.getConfig();
            if(resource == null) {
                this.append("<img src=\"\" alt=\"");
                this.escapeAndAppend(node.getText());
                this.append("\"/>");
            } else {
                this.append("<img");
                this.append(" class=\"jslghtbx-thmb\" ");
                if(imgr==ImageRendering.LIGHTBOX) {

                    this.append(" data-jslghtbx=\"");
                    this.append(config.getBasePath());
                    this.append("api/pub/image/");
                    this.append(String.valueOf(e.getId()));
                    this.append("/large/");
                    this.escapeAndAppend(resource.getLocation());
                    this.append("\"");

                    this.append(" data-jslghtbx-group=\"");
                    this.append(String.valueOf(e.getId()));
                    this.append("\" ");
                }

                this.append(" src=\"");
                this.append(config.getBasePath());
                this.append("api/pub/image/"+e.getId()+"/small/");
                this.escapeAndAppend(resource.getLocation());
                if(node.getText() != null) {
                    this.append("\" alt=\"");
                    this.escapeAndAppend(node.getText());
                }
                if(resource.getHint() != null) {
                    this.append("\" title=\"");
                    this.escapeAndAppend(resource.getHint());
                }
                this.append("\"/>");
            }
        }
    }
}
