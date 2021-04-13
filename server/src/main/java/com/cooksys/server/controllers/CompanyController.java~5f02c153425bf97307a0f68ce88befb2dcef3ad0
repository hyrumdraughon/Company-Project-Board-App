package com.cooksys.server.controllers;

import com.cooksys.server.models.CompanyDto;
import com.cooksys.server.services.CompanyService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/@{companyId}")
    @ResponseStatus(HttpStatus.OK)
    public CompanyDto getCompanyById(@PathVariable Long companyId) {
        return companyService.getCompanyById(companyId);
    }

}
