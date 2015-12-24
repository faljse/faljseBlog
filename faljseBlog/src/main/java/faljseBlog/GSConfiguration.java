package faljseBlog;

import io.dropwizard.Configuration;



/**
 * Created by Martin on 24.10.2015.
 */
public class GSConfiguration extends Configuration {
    private String faljseBlogDir;
    private String staticContentDir;

    public String getStaticContentDir() {
        return staticContentDir;
    }

    public void setStaticContentDir(String staticContentDir) {
        this.staticContentDir = staticContentDir;
    }

    public void setFaljseBlogDir(String faljseBlogDir) {
        this.faljseBlogDir = faljseBlogDir;
    }
    public String getFaljseBlogDir() {
        return faljseBlogDir;
    }
}
