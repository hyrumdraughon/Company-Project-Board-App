package com.cooksys.server.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.cooksys.server.models.UserDto;
import com.cooksys.server.services.UserService;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/users")
@AllArgsConstructor
public class UserController {
	private final UserService us;
	
	
	@GetMapping
	public List<UserDto> getAllUsers(){
		return us.getAllUsers();
	}
	
	@GetMapping("/profile/@{id}")
	@ResponseStatus(HttpStatus.OK)
	public UserDto getUser(@PathVariable("id") Long id) {
		return us.getUser(id);
	}

}
