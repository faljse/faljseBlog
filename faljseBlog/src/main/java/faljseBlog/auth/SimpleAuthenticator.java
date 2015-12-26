package faljseBlog.auth;

import com.google.common.base.Optional;
import faljseBlog.FaljseBlogApplication;
import io.dropwizard.auth.AuthenticationException;
import io.dropwizard.auth.Authenticator;
import io.dropwizard.auth.basic.BasicCredentials;

/**
 * Created by Martin on 26.12.2015.
 */
public class SimpleAuthenticator implements Authenticator<BasicCredentials, User> {
    @Override
    public Optional<User> authenticate(BasicCredentials credentials) throws AuthenticationException {
        String password= FaljseBlogApplication.getConfig().getPassword();
        if (password.equals(credentials.getPassword())) {
            return Optional.of(new User(credentials.getUsername()));
        }
        return Optional.absent();
    }
}