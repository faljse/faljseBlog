package faljseBlog;

import io.dropwizard.Configuration;



/**
 * Created by Martin on 24.10.2015.
 */
public class GSConfiguration extends Configuration {
    private String faljseBlogDir;
    private String staticContentDir=".";
    private String basePath="/";
    private String password="password";
    private String blogTitle="blogTitle";
    private String trackingScript="";
    private String linkFacebook="#";
    private String linkTwitter="#";
    private String linkGitHub="#";

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getBasePath() {
        return basePath;
    }

    public void setBasePath(String basePath) {
        this.basePath = basePath;
    }

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

    public String getBlogTitle() {
        return blogTitle;
    }

    public void setBlogTitle(String blogTitle) {
        this.blogTitle = blogTitle;
    }

    public String getTrackingScript() {
        return trackingScript;
    }

    public void setTrackingScript(String trackingScript) {
        this.trackingScript = trackingScript;
    }

    public String getLinkFacebook() {
        return linkFacebook;
    }

    public void setLinkFacebook(String linkFacebook) {
        this.linkFacebook = linkFacebook;
    }

    public String getLinkTwitter() {
        return linkTwitter;
    }

    public void setLinkTwitter(String linkTwitter) {
        this.linkTwitter = linkTwitter;
    }

    public String getLinkGitHub() {
        return linkGitHub;
    }

    public void setLinkGitHub(String linkGitHub) {
        this.linkGitHub = linkGitHub;
    }
}
