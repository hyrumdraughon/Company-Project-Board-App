package com.cooksys.server.services.implementations;

import com.cooksys.server.entities.Project;
import com.cooksys.server.entities.Team;
import com.cooksys.server.exceptions.BadRequestException;
import com.cooksys.server.exceptions.NotFoundException;
import com.cooksys.server.mappers.ProjectMapper;
import com.cooksys.server.models.CreateProjectDto;
import com.cooksys.server.models.ProjectDto;
import com.cooksys.server.models.UpdateProjectDto;
import com.cooksys.server.repositories.ProjectRepository;
import com.cooksys.server.repositories.TeamRepository;
import com.cooksys.server.services.ProjectService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class ProjectServiceImpl implements ProjectService {

    private final TeamRepository teamRepository;
    private final ProjectRepository projectRepository;
    private final ProjectMapper projectMapper;

    @Override
    public ProjectDto createProject(CreateProjectDto createProjectDto) {

        checkCreateProjectDtoForNull(createProjectDto);

        Team databaseTeam = getTeamById(createProjectDto.getTeamId());

        Project createdProject = new Project();

        createdProject.setTitle(createProjectDto.getTitle());
        createdProject.setDescription(createProjectDto.getDescription());
        createdProject.setProjectTeam(databaseTeam);
        createdProject.setCompleted(false);
        createdProject.setDeleted(false);

        createdProject = projectRepository.saveAndFlush(createdProject);

        return projectMapper.entityToDto(createdProject);

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

    // Helper methods

    // Checks createProjectDto for null values, throws errors accordingly.
    private void checkCreateProjectDtoForNull(CreateProjectDto createProjectDto) {
        if(createProjectDto == null) {
            throw new BadRequestException("Request body must be provided.");
        }

        if(createProjectDto.getTitle() == null) {
            throw new BadRequestException("Project title must be provided.");
        }

        if(createProjectDto.getDescription() == null) {
            throw new BadRequestException("Project description must be provided.");
        }

        if(createProjectDto.getTeamId() == null) {
            throw new BadRequestException("Team ID for the project must be provided");
        }
    }

    // Returns the team that corresponds to the passed ID. Throws error otherwise.
    private Team getTeamById(Long teamId) {
        for(Team team : teamRepository.findAll()) {
            if(team.getId().equals(teamId)) {
                return team;
            }
        }
        throw new NotFoundException("Specified team does not exist.");
    }
}
