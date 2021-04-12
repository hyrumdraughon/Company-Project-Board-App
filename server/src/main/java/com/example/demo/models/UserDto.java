package com.example.demo.models;

import java.sql.Timestamp;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class UserDto {

    private ProfileDto profile;

    private Timestamp joined;

    private String email;

    
}
