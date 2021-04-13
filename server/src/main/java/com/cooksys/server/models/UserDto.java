package com.cooksys.server.models;

import java.sql.Timestamp;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class UserDto {

    /*  FIXME
        Frontend team specified that they wanted companyId, teamId, and role boolean. Currently, objects are returned
        for those, which contain the information they need, but it's not exactly what they asked for.
     */

    private Long id;

    private String email;

    private ProfileDto profile;

    private Long companyId;

    private Long teamId;

    private Timestamp created;

    private Timestamp updated;

    private RoleDto role;

}
