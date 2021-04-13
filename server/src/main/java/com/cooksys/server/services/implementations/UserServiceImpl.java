package com.cooksys.server.services.implementations;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.cooksys.server.entities.User;
import com.cooksys.server.exceptions.BadRequestException;
import com.cooksys.server.exceptions.NotFoundException;
import com.cooksys.server.mappers.UserMapper;
import com.cooksys.server.models.UserDto;
import com.cooksys.server.repositories.UserRepository;
import com.cooksys.server.services.UserService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {
	
	private UserRepository userRepo;
	private UserMapper userMapper;
	
	//Takes an Id and and a User Object. if Optional User is empty the user doesnt exist
	public void checkExistsNotDeleted(Long id, Optional<User> optionalUser) {
		if(optionalUser.isEmpty()) {
			throw new NotFoundException("the user with id: " + id + "Does not exist");
		  //If User is found but is NOT active, means the user has been "deleted"
		} else if (!optionalUser.get().isActive()) {
			throw new NotFoundException("The user " + optionalUser.get().getProfile().getFirstName() + " has been deleted");
		}
	}
	
	@Override
	public UserDto getUser(Long id) {
		if(id == null) {
			throw new BadRequestException("ID cannot be empty or null was provided: " + id);
		}
		Optional<User> optionalUser = userRepo.findById(id);
		//User Validation to check to see if the user exists.
		checkExistsNotDeleted(optionalUser.get().getId(), optionalUser);
		
		//Return user entity DTO
		return userMapper.entityToDto(optionalUser.get());
	}

	@Override
	public List<UserDto> getAllUsers() {
		//Returns every active user in the repository. Mostly for testing Purposes.
		List<UserDto> activeUsers = new ArrayList<>();
		for (User u : userRepo.findAll()) {
			if (!u.isActive()) {
				activeUsers.add(userMapper.entityToDto(u));
			}
		}
		return activeUsers;
	}

}
