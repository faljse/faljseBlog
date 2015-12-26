package faljseBlog.auth;

/**
 * Created by Martin on 26.12.2015.
 */


import java.security.Principal;

public class User implements Principal {
    private final String name;

    public User(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public int getId() {
        return (int) (Math.random() * 100);
    }
}