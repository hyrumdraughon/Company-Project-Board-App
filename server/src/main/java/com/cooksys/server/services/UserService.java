package com.cooksys.server.services;

import java.util.List;

import com.cooksys.server.models.CreateUserDto;
import com.cooksys.server.models.UserDto;

public interface UserService {

	UserDto getUser(Long id);

	List<UserDto> getAllUsers();

	UserDto createUser(CreateUserDto createUserDto);

	UserDto updateUserProfile(Long id, CreateUserDto createUserDto);

	UserDto deleteUser(Long id);

}
