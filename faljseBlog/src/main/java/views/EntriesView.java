package views;

import objects.BlogEntry;

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
