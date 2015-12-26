package views;

import faljseBlog.FaljseBlogApplication;
import io.dropwizard.views.View;
import objects.BlogEntry;
import org.tautua.markdownpapers.HtmlEmitter;
import org.tautua.markdownpapers.Markdown;
import org.tautua.markdownpapers.ast.Document;
import org.tautua.markdownpapers.ast.Image;
import org.tautua.markdownpapers.ast.Resource;
import org.tautua.markdownpapers.ast.Visitor;
import org.tautua.markdownpapers.parser.ParseException;
import org.tautua.markdownpapers.parser.Parser;

import java.io.StringReader;
import java.io.StringWriter;
import java.util.List;

/**
 * Created by Martin on 24.10.2015.
 */
public class EditView extends View {
    private BlogEntry entry;
    private List<BlogEntry> entries;



    public List<BlogEntry> getEntries() {
        return entries;
    }
    public void setEntries(List<BlogEntry> entries) {
        this.entries = entries;
    }

    public BlogEntry getEntry() {
        return entry;
    }
    public String getBasePath()
    {
        return FaljseBlogApplication.getConfig().getBasePath();
    }

    public void setEntry(BlogEntry entry) {
        this.entry = entry;
    }

    public EditView(List<BlogEntry> entries, BlogEntry e) {
        super("edit.ftl");
        this.entry=e;
        this.entries=entries;
    }



}
