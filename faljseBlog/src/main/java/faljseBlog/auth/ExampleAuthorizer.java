package faljseBlog.auth;

import io.dropwizard.auth.Authorizer;

/**
 * Created by Martin on 26.12.2015.
 */
public class ExampleAuthorizer implements Authorizer<User> {
    @Override
    public boolean authorize(User user, String role) {
        return user.getName().equals("good-guy") && role.equals("ADMIN");
    }
}