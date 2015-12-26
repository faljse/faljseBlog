package faljseBlog;

import com.google.common.collect.ImmutableList;
import objects.Blog;
import objects.BlogEntry;

import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.DirectoryStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

/**
 * Created by Martin on 23.12.2015.
 */
public class Storage {


    private final Path dir;
    private volatile ImmutableList<BlogEntry> entries=ImmutableList.of();
    private volatile ImmutableList<BlogEntry> publishedEntries=ImmutableList.of();


    public ImmutableList<BlogEntry> getEntries() {
        return entries;
    }
    public List<BlogEntry> getPublishedEntries() {
        synchronized (this)
        {
            if(publishedEntries==null)
            {
                ArrayList<BlogEntry> newPub=new ArrayList<>();
                for(BlogEntry e:entries)
                    if(e.getPublished())
                        newPub.add(e);
                publishedEntries=ImmutableList.copyOf(newPub);
            }
        }
        return  publishedEntries;
    }

    public Storage(Path dir) {
        List<BlogEntry> l=new ArrayList<>();
        this.dir=dir;
        try (DirectoryStream<Path> ds = Files.newDirectoryStream(dir))
        {
            for(Path p:ds)
            {
                if(Files.isDirectory(p))
                {
                    BlogEntry e=parseEntry(p);
                    if(null!=e)
                        l.add(e);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        sort(l);
        entries=ImmutableList.copyOf(l);
        publishedEntries=null;
    }

    private void sort(List<BlogEntry> ent)
    {
        Collections.sort(ent, new Comparator<BlogEntry>() {
            @Override
            public int compare(BlogEntry o1, BlogEntry o2) {
                return o2.getId()-o1.getId();
            }
        });
    }

    private BlogEntry parseEntry(Path entryPah) {
        BlogEntry e;
        e=Tools.<BlogEntry>load(entryPah.resolve("data.json").toFile(), BlogEntry.class);
        return e;
    }

    public int getNewId()
    {
        int max=1;
        for(BlogEntry e:entries)
        {
            if(e.getId()>max)
                max=e.getId();
        }
        return max+1;

    }

    public BlogEntry upsert(BlogEntry e)
    {
        ArrayList<BlogEntry> newList=new ArrayList<>();
        newList.addAll(entries);

        if(e.getId()<1) {
            e.setId(getNewId());
            newList.add(e);
        }

        for(int i=0;i<entries.size();i++)
        {
            if(entries.get(i).getId()==e.getId())
                newList.set(i,e);
        }
        String dirName=String.valueOf(e.getId());
        try {
            Path entryDir=dir.resolve(dirName);
            if(Files.notExists(entryDir))
                    Files.createDirectory(entryDir);
            Tools.serialize(e, entryDir.resolve("data.json").toFile());
        } catch (IOException e1) {
            e1.printStackTrace();
        }
        sort(newList);
        entries=ImmutableList.copyOf(newList);
        publishedEntries=null;
        return e;
    }

    public BlogEntry getEntry(int id) {
        for(BlogEntry e:entries)
        {
            if(e.getId()==id)
                return e;
        }
        return null;
    }


}
