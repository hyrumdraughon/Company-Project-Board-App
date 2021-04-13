package com.cooksys.server.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.cooksys.server.entities.Role;
import com.cooksys.server.entities.Team;
import com.cooksys.server.models.CreateUserDto;
import com.cooksys.server.models.RoleDto;
import com.cooksys.server.models.TeamDto;
import com.cooksys.server.models.UserDto;
import com.cooksys.server.services.UserService;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/user")
@AllArgsConstructor
public class UserController {
	private final UserService us;
	
	
	@GetMapping
	public List<UserDto> getAllUsers(){
		return us.getAllUsers();
	}
	
	@GetMapping("/@{userId}")
	@ResponseStatus(HttpStatus.OK)
	public UserDto getUser(@PathVariable("userId") Long id) {
		return us.getUser(id);
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public UserDto createUser(@RequestBody CreateUserDto createUserDto) {
		return us.createUser(createUserDto);
	}

	@PatchMapping("/@{userId}")
	@ResponseStatus(HttpStatus.OK)
	public UserDto updateUserProfile(@PathVariable("userId") Long id, @RequestBody CreateUserDto createUserDto) {
		return us.updateUserProfile(id, createUserDto);
	}
	
	@DeleteMapping("/@{userId}")
	@ResponseStatus(HttpStatus.OK)
	public UserDto deleteUser(@PathVariable("userId") Long id) {
		return us.deleteUser(id);
	}
	
	//Should take a user id, and a request body that will be used to set a role.
	//This may change from a request body to a Long Variable later.
	@PatchMapping("/@{userId}/role")
	@ResponseStatus(HttpStatus.OK)
	public UserDto addRole(@PathVariable("userId") Long id, @RequestBody RoleDto role) {
		return us.addRole(id, role);
	}
	
	@PatchMapping("/@{userId}/teams")
	@ResponseStatus(HttpStatus.OK)
	public UserDto addTeam(@PathVariable("userId") Long id, @RequestBody TeamDto team) {
		return us.addTeam(id, team);
		
	}
}
