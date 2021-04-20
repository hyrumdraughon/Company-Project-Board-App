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
    private final CompanyRepository companyRepository;
    private final RoleRepository roleRepo;

    @Override
    public void run(String... args) {

        /*
         This is a bad fix for the problem, because if the database is empty, these two functions do need to run.
         They are disabled currently so that there are no conflicts, but if deploying a server to a brand new
         database is what we're trying to do, uncomment these two functions and change `none` to `create-drop` on
         application.properties JUST for the first run, following that, change the values again.

                initializeRoles();
                initializeCompanies();
        */

    }

    private void initializeRoles() {
        Role admin = new Role();
        admin.setName("Admin");
        admin.setId((long) 1);
        roleRepo.saveAndFlush(admin);
        Role user = new Role();
        user.setName("User");
        user.setId((long) 2);
        roleRepo.saveAndFlush(user);
    }

    /**
     * Companies that the application will use should be created and added here. Companies cannot be created by the
     * application, so these are basically hardcoded.
     */
    private void initializeCompanies() {

        Role admin = roleRepo.getOne((long) 1);

        // Creates company Microsoft and user Bill Gates
        Company microsoft = new Company("Microsoft", "Software company.");
        microsoft = companyRepository.saveAndFlush(microsoft);
        initializeAdmin(microsoft, admin, "bgates@microsoft.com", "Bill", "Gates");

        // Creates company Apple and user Steve Jobs
        Company apple = new Company("Apple", "Software company.");
        apple = companyRepository.saveAndFlush(apple);
        initializeAdmin(apple, admin, "sjobs@apple.com", "Steve", "Jobs");

        // Creates company Amazon and user Jeff Bezos
        Company amazon = new Company("Amazon", "Online shopping company.");
        amazon = companyRepository.saveAndFlush(amazon);
        initializeAdmin(amazon, admin, "jbezos@amazon.com", "Jeff", "Bezos");

        // Creates company Facebook and user Mark Zuckerberg
        Company facebook = new Company("Facebook", "Social media company.");
        facebook = companyRepository.saveAndFlush(facebook);
        initializeAdmin(facebook, admin, "mzuckerberg@facebook.com", "Mark", "Zuckerberg");

        // Creates company Google and user Sundar Pichai
        Company google = new Company("Google", "Search engine company.");
        google = companyRepository.saveAndFlush(google);
        initializeAdmin(google, admin, "spichai@google.com", "Sundar", "Pichai");

    }

    private void initializeAdmin(Company company, Role role, String email, String firstName, String lastName) {
        Credential credential = new Credential();
        credential.setEmail(email);
        credential.setPassword("password");
        Profile profile = new Profile();
        profile.setFirstName(firstName);
        profile.setLastName(lastName);
        User user = new User();
        user.setUserCompany(company);
        user.setActive(true);
        user.setCredentials(credential);
        user.setProfile(profile);
        user.setRole(role);
        userRepository.saveAndFlush(user);
    }
}