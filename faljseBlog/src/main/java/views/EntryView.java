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
public class EntryView extends BaseView {
    private  BlogEntry entry;

    public void setEntry(BlogEntry entry) {
        this.entry = entry;
    }

    public BlogEntry getEntry() {
        return entry;
    }

    public EntryView(BlogEntry entry) {
        super("entry.ftl");
        this.entry=entry;
    }
}
