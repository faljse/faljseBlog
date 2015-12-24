package faljseBlog;

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
    private List<BlogEntry> entries=new ArrayList();

    public List<BlogEntry> getEntries() {
        return entries;
    }

    public Storage(Path dir) {
        this.dir=dir;
        try (DirectoryStream<Path> ds = Files.newDirectoryStream(dir))
        {
            for(Path p:ds)
            {
                if(Files.isDirectory(p))
                {

                    BlogEntry e=parseEntry(p);
                    if(null!=e)
                        entries.add(e);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        sort();

    }

    private void sort()
    {
        Collections.sort(entries, new Comparator<BlogEntry>() {
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

    public BlogEntry write(BlogEntry e)
    {
        if(e.getId()<1) {
            e.setId(getNewId());
            entries.add(e);
        }

       for(int i=0;i<entries.size();i++)
       {
           if(entries.get(i).getId()==e.getId())
               entries.set(i,e);
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
        sort();
        return e;
    }

    public BlogEntry getEntry(int id) {
        for(BlogEntry e:entries)
        {
            if(e.getId()==id)
            {
                System.out.println(e.getText());
                return e;

            }

        }
        return null;
    }
}
