package com.example.demo.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

import com.example.demo.entities.User;
import com.example.demo.models.CreateUserDto;
import com.example.demo.models.UserDto;

@Mapper(componentModel = "spring", uses = {ProfileMapper.class, CredentialMapper.class})
public interface UserMapper {

    User dtoToEntity(CreateUserDto createUserDto);
    User dtoTo_get_Entity(UserDto userDto);

    @Mapping(target="email", source="credentials.email")
    UserDto entityToDto(User user);

    List<UserDto> entitiesToDtos(List<User> users);
    
}
