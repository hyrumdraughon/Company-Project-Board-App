package com.cooksys.server;

import com.cooksys.server.entities.*;
import com.cooksys.server.repositories.CompanyRepository;
import com.cooksys.server.repositories.TeamRepository;
import com.cooksys.server.repositories.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class DatabaseSeeder implements CommandLineRunner {

    private final UserRepository userRepository;
    private final TeamRepository teamRepository;
    private final CompanyRepository companyRepository;

    @Override
    public void run(String... args) {

        Profile profile = new Profile();
        profile.setFirstName("Michael");
        profile.setLastName("Degg");
        profile.setPhone("478-832-2687");

        Credential credential = new Credential();
        credential.setEmail("test@test.com");
        credential.setPassword("password");

        Team team = new Team();
        team = teamRepository.saveAndFlush(team);

        Company company = new Company();
        company = companyRepository.saveAndFlush(company);

        User user = new User();
        user.setCredentials(credential);
        user.setProfile(profile);
        user.setUserTeam(team);
        user.setUserCompany(company);

        userRepository.saveAndFlush(user);

    }
}