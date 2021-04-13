package com.cooksys.server;

import com.cooksys.server.entities.Credential;
import com.cooksys.server.entities.Profile;
import com.cooksys.server.entities.User;
import com.cooksys.server.repositories.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class DatabaseSeeder implements CommandLineRunner {

    private final UserRepository userRepository;

    @Override
    public void run(String... args) {

        Profile profile = new Profile();
        profile.setFirstName("Michael");
        profile.setLastName("Degg");
        profile.setPhone("478-832-2687");

        Credential credential = new Credential();
        credential.setEmail("test@test.com");
        credential.setPassword("password");

        User user = new User();
        user.setCredentials(credential);
        user.setProfile(profile);

        userRepository.saveAndFlush(user);

    }
}