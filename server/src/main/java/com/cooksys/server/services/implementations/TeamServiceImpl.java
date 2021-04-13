package com.cooksys.server.services.implementations;

import com.cooksys.server.models.CreateTeamDto;
import com.cooksys.server.models.ProjectDto;
import com.cooksys.server.models.TeamDto;
import com.cooksys.server.models.UserDto;
import com.cooksys.server.services.TeamService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class TeamServiceImpl implements TeamService {

    // TODO Implement this endpoint. It should create a team and return it.
    @Override
    public TeamDto createTeam(CreateTeamDto createTeamDto) {
        return null;
    }

    // TODO Implement this endpoint. It should get the team from the specified ID and return it.
    @Override
    public TeamDto getTeam(Long teamId) {
        return null;
    }

    // TODO Implement this endpoint. It should add the user by user ID to the team by team ID and return the team.
    @Override
    public TeamDto addUser(Long teamId, Long userId) {
        return null;
    }

    // TODO Implement this endpoint. It should add the project by project ID to the team by team ID and return the team.
    @Override
    public TeamDto addProject(Long teamId, Long projectId) {
        return null;
    }

    // TODO Implement this endpoint. It should return a list of users that belong to the team specified by the team ID.
    @Override
    public List<UserDto> getUsers(Long teamId) {
        return null;
    }

    // TODO Implement this endpoint. It should return a list of projects that belong to the team specified by the team ID.
    @Override
    public List<ProjectDto> getProjects(Long teamId) {
        return null;
    }

}