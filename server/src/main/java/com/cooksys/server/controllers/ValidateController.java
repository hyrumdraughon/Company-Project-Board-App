package com.cooksys.server.controllers;

import com.cooksys.server.models.CredentialDto;
import com.cooksys.server.models.UserDto;
import com.cooksys.server.services.ValidateService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
@AllArgsConstructor
public class ValidateController {

    private final ValidateService validateService;

    @GetMapping("/login")
    public UserDto login(@RequestBody CredentialDto credentialDto) {
        return validateService.login(credentialDto);
    }
}
