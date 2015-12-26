package views;

import faljseBlog.FaljseBlogApplication;
import io.dropwizard.views.View;
import objects.BlogEntry;
import org.tautua.markdownpapers.HtmlEmitter;
import org.tautua.markdownpapers.Markdown;
import org.tautua.markdownpapers.ast.*;
import org.tautua.markdownpapers.parser.ParseException;
import org.tautua.markdownpapers.parser.Parser;

import java.io.StringReader;
import java.io.StringWriter;
import java.util.List;

/**
 * Created by Martin on 24.10.2015.
 */
public class EntriesView extends View {
    private List<BlogEntry> entries;
    public List<BlogEntry> getEntries() {
        return entries;
    }
    public void setEntries(List<BlogEntry> entries) {
        this.entries = entries;
    }
    public String getBasePath()
    {
        return FaljseBlogApplication.getConfig().getBasePath();
    }
    private class Asd extends  HtmlEmitter
    {
        private  BlogEntry e;
        public Asd(Appendable buffer, BlogEntry e)
        {
            super(buffer);
            this.e=e;
        }

        @Override
        public void visit(Image node) {
            Resource resource = node.getResource();
            if(resource == null) {
                this.append("<img src=\"\" alt=\"");
                this.escapeAndAppend(node.getText());
                this.append("\"/>");
            } else {
                this.append("<img");
                this.append(" class=\"jslghtbx-thmb\" ");
                this.append(" onClick=\"lightbox.open('");
                this.append("./image/"+e.getId()+"/");
                this.escapeAndAppend(resource.getLocation());
                this.append("')\" ");
                this.append(" src=\"");
                this.append("./image/"+e.getId()+"/");
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

    public String toHtml(BlogEntry e) {
        Markdown md = new Markdown();
        StringWriter sw=new StringWriter();
        Visitor v=new Asd(sw, e);
        Parser parser = new Parser(new StringReader(e.getText()));
        try {
            Document doc = parser.parse();
            doc.accept(v);
        } catch (ParseException e1) {
            e1.printStackTrace();
        }
        return sw.toString();
    }

    public EntriesView(List<BlogEntry> entries) {
        super("entries.ftl");

        this.entries=entries;
    }
}
