package com.cooksys.server.mappers;

import com.cooksys.server.entities.Team;
import com.cooksys.server.models.TeamDto;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface TeamMapper {

    TeamDto entityToDto(Team team);

    List<TeamDto> entitiesToDtos(List<Team> teams);

}
