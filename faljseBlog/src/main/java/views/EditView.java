package views;

import objects.BlogEntry;

import java.util.List;

/**
 * Created by Martin on 24.10.2015.
 */
public class EditView extends BaseView {
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

    public void setEntry(BlogEntry entry) {
        this.entry = entry;
    }

    public EditView(List<BlogEntry> entries, BlogEntry e) {
        super("edit.ftl");
        this.entry=e;
        this.entries=entries;
    }



}
