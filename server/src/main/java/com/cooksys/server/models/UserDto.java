package com.cooksys.server.models;

import java.sql.Timestamp;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class UserDto {

    private Long id;

    private String email;

    private ProfileDto profile;

    private CompanyDto userCompany;

    private TeamDto userTeam;

    private Timestamp created;

    private Timestamp updated;

    // FIXME Serves as admin boolean

}
