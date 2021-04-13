package com.cooksys.server.services;

import java.util.List;

import com.cooksys.server.models.UserDto;

public interface UserService {

	UserDto getUser(Long id);

	List<UserDto> getAllUsers();

}
