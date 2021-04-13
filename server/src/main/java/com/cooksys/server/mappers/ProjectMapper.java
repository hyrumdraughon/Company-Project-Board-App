package com.cooksys.server.mappers;

import com.cooksys.server.entities.Project;
import com.cooksys.server.models.ProjectDto;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ProjectMapper {

    ProjectDto entityToDto(Project project);

    List<ProjectDto> entitiesToDtos(List<Project> projects);

}
