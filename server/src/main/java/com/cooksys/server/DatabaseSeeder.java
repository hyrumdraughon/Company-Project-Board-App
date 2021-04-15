package com.cooksys.server;

import com.cooksys.server.entities.*;
import com.cooksys.server.repositories.CompanyRepository;
import com.cooksys.server.repositories.RoleRepository;
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
    private final RoleRepository roleRepo;

    @Override
    public void run(String... args) {

        Profile profile = new Profile();
        profile.setFirstName("Michael");
        profile.setLastName("Degg");
        profile.setPhone("478-832-2687");

        Credential credential = new Credential();
        credential.setEmail("test@test.com");
        credential.setPassword("password");

        Company company = new Company();
        company = companyRepository.saveAndFlush(company);

        Team team = new Team();
        team.setTeamName("Alpha");
        team.setTeamCompany(company);
        team = teamRepository.saveAndFlush(team);
        Team team2 = new Team();
        team2.setTeamName("Beta");
        team2 = teamRepository.saveAndFlush(team2);



        User user = new User();
        user.setCredentials(credential);
        user.setProfile(profile);
        user.setUserTeam(team);
        user.setUserCompany(company);
        user.setActive(true);
        
        Role role = new Role();
        role.setName("Admin");
        role.setId((long) 1);
        role = roleRepo.saveAndFlush(role);
        
        Role role2 = new Role();
        role2.setName("User");
        role2.setId((long) 2);
        role2 = roleRepo.saveAndFlush(role2);
        
        
        
        user.setRole(role2);

        userRepository.saveAndFlush(user);

    }
}