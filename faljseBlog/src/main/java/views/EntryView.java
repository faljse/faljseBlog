package views;

import objects.BlogEntry;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

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

    public String firstImgLink(String markdown)
    {
        if(entry.getHeaderImage()!=null&&entry.getHeaderImage().length()>0)
            return entry.getHeaderImage();
        Pattern p=Pattern.compile("!\\[.*\\]\\((.*)\\ \".*\"\\)");
        Matcher m=p.matcher(markdown);
        m.find();
        return m.group(1);
    }
}
