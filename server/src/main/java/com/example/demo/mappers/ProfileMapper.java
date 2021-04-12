package com.example.demo.mappers;

import com.example.demo.entities.Profile;
import com.example.demo.models.ProfileDto;

import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ProfileMapper {
    
    ProfileDto embeddableToDto(Profile profile);

    Profile dtoToEmbeddable(ProfileDto profileResponseDto);
    
}
