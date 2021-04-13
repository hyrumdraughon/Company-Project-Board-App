package com.cooksys.server.services.implementations;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpStatusCodeException;

import com.cooksys.server.entities.User;
import com.cooksys.server.exceptions.BadRequestException;
import com.cooksys.server.exceptions.NotFoundException;
import com.cooksys.server.mappers.CredentialMapper;
import com.cooksys.server.mappers.ProfileMapper;
import com.cooksys.server.mappers.UserMapper;
import com.cooksys.server.models.CreateUserDto;
import com.cooksys.server.models.UserDto;
import com.cooksys.server.repositories.CompanyRepository;
import com.cooksys.server.repositories.UserRepository;
import com.cooksys.server.services.UserService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

	private UserRepository userRepo;
	private UserMapper userMapper;
	private CredentialMapper credential;
	private ProfileMapper profile;
	private CompanyRepository companies;

	// Takes an Id and and a User Object. if Optional User is empty the user doesnt
	// exist
	public void checkExistsNotDeleted(Long id, Optional<User> optionalUser) {
		if (optionalUser.isEmpty()) {
			throw new NotFoundException("the user with id: " + id + "Does not exist");
			// If User is found but is NOT active, means the user has been "deleted"
		} else if (!optionalUser.get().isActive()) {
			throw new NotFoundException(
					"The user " + optionalUser.get().getProfile().getFirstName() + " has been deleted");
		}
	}

	@Override
	public UserDto getUser(Long id) {
		if (id == null) {
			throw new BadRequestException("ID cannot be empty or null was provided: " + id);
		}
		Optional<User> optionalUser = userRepo.findById(id);
		// User Validation to check to see if the user exists.
		checkExistsNotDeleted(optionalUser.get().getId(), optionalUser);

		// Return user entity DTO
		return userMapper.entityToDto(optionalUser.get());
	}

	@Override
	public List<UserDto> getAllUsers() {
		// Returns every active user in the repository. Mostly for testing Purposes.
		List<UserDto> activeUsers = new ArrayList<>();
		for (User u : userRepo.findAll()) {
			if (u.isActive()) {
				activeUsers.add(userMapper.entityToDto(u));
			}
		}
		return activeUsers;
	}

	@Override
	public UserDto createUser(CreateUserDto createUserDto) {
		// Creates a new user. If any required fields are missing or the email
		// provided is already taken, an error should be sent in lieu of a response.
		// If the given credentials match a previously-deleted user, re-activate the
		// deleted user instead of creating a new one.
		if (userRepo.equals(createUserDto.getCredentials().getEmail())) {
			User user = userRepo.findByCredentialsEmail(createUserDto.getCredentials().getEmail());
			if (!user.isActive()) {
				user.setActive(true);
				return userMapper.entityToDto(user);
			}
		} else if (createUserDto.getCredentials() == null || createUserDto.getProfile() == null) {
			throw new BadRequestException("You need to provide both credentials and Profile to create a user");
		} else {
			User user = new User();
			// Save all relevant information.
			user.setCredentials(credential.dtoToEmbeddable(createUserDto.getCredentials()));
			user.setProfile(profile.dtoToEmbeddable(createUserDto.getProfile()));
			user.setUserCompany(companies.getOne(createUserDto.getCompanyId()));
			user.setActive(true);

			return userMapper.entityToDto(userRepo.saveAndFlush(user));
		}
		throw new NullPointerException("Something went wrong, try again.");
	}

	@Override
	public UserDto updateUserProfile(Long id, CreateUserDto createUserDto) {
		if (id == null) {
			throw new NotFoundException("Must Provide a user ID");
		}
		// check user exists and is not deleted
		Optional<User> optUser = userRepo.findById(id);
		checkExistsNotDeleted(id, optUser);

		// update user's profile, flush, and return UserDto
		optUser.get().setProfile(profile.dtoToEmbeddable(createUserDto.getProfile()));
		userRepo.flush();
		return userMapper.entityToDto(optUser.get());
	}

	@Override
	public UserDto deleteUser(Long id) {
		if (id == null) {
			throw new NotFoundException("Must Provide a user ID");
		}
		// Check user exists and is not deleted
		Optional<User> optUser = userRepo.findById(id);
		if (optUser.isEmpty()) {
			throw new NotFoundException("The user with id: " + id + " does not exist");
		} else if (!optUser.get().isActive()) {
			throw new BadRequestException("User has already been deleted");
		}

		optUser.get().setActive(false);
		userRepo.flush();
		return userMapper.entityToDto(optUser.get());
	}

}
