package com.cooksys.server.services.implementations;

import com.cooksys.server.entities.Company;
import com.cooksys.server.mappers.CompanyMapper;
import com.cooksys.server.models.CompanyDto;
import com.cooksys.server.repositories.CompanyRepository;
import com.cooksys.server.services.CompanyService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class CompanyServiceImpl implements CompanyService {

    private final CompanyRepository companyRepository;
    private final CompanyMapper companyMapper;

    @Override
    public List<CompanyDto> getAllCompanies() {
        List<Company> companies = companyRepository.findAll();
        return companyMapper.entitiesToDtos(companies);
    }

}
