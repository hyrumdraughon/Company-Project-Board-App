package com.cooksys.server.controllers;

import com.cooksys.server.models.CompanyDto;
import com.cooksys.server.services.CompanyService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/company")
@AllArgsConstructor
public class CompanyController {

    private final CompanyService companyService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<CompanyDto> getAllCompanies() {
        return companyService.getAllCompanies();
    }

}
