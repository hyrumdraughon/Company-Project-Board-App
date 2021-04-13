package com.cooksys.server.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

import com.cooksys.server.entities.User;
import com.cooksys.server.models.CreateUserDto;
import com.cooksys.server.models.UserDto;

@Mapper(componentModel = "spring", uses = {ProfileMapper.class, CredentialMapper.class})
public interface UserMapper {

    User dtoToEntity(CreateUserDto createUserDto);
    User dtoTo_get_Entity(UserDto userDto);

    @Mapping(target= "email", source="credentials.email")
    @Mapping(target = "companyId", source = "userCompany.id")
    @Mapping(target = "teamId", source = "userTeam.id")
    UserDto entityToDto(User user);

    List<UserDto> entitiesToDtos(List<User> users);
    
}
