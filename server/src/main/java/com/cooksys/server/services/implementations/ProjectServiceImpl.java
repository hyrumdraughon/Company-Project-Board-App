package com.cooksys.server.services.implementations;

import com.cooksys.server.models.CreateProjectDto;
import com.cooksys.server.models.ProjectDto;
import com.cooksys.server.models.UpdateProjectDto;
import com.cooksys.server.services.ProjectService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class ProjectServiceImpl implements ProjectService {

    // TODO Implement this endpoint. Should create a project for the specified team.
    @Override
    public ProjectDto createProject(CreateProjectDto createProjectDto) {
        return null;
    }

    // TODO Implement this endpoint. Should return the project specified by projectId
    @Override
    public ProjectDto getProject(Long projectId) {
        return null;
    }

    // TODO Implement this endpoint. Updates project with the specified values.
    @Override
    public ProjectDto updateProject(Long projectId, UpdateProjectDto updateProjectDto) {
        return null;
    }

}
