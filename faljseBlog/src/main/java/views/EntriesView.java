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
public class EntriesView extends BaseView {
    private List<BlogEntry> entries;
    public List<BlogEntry> getEntries() {
        return entries;
    }
    public void setEntries(List<BlogEntry> entries) {
        this.entries = entries;
    }

    public EntriesView(List<BlogEntry> entries) {
        super("entries.ftl");
        this.entries=entries;
    }
}
