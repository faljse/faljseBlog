package objects;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.joda.deser.InstantDeserializer;
import com.fasterxml.jackson.datatype.joda.ser.InstantSerializer;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

/**
 * Created by Martin on 21.11.2015.
 */
public class BlogEntry {
    @JsonProperty()
    private int id;
    @JsonProperty
    private String title;
    @JsonProperty
    private String text;
    @JsonProperty
    private List<String> files;

    @JsonProperty
    private long created;

    @JsonProperty
    private long modified;

    public BlogEntry() {
        created=System.currentTimeMillis();
        modified=System.currentTimeMillis();

    }

    public BlogEntry(int id, String title, String text, List<String> files) {
        this.id = id;
        this.title = title;
        this.text = text;
        this.files = files;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public List<String> getFiles() {
        return files;
    }

    public void setFiles(List<String> files) {
        this.files = files;
    }


}
