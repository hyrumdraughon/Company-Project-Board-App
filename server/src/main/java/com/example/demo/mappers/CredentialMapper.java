package com.example.demo.mappers;

import org.mapstruct.Mapper;
import com.example.demo.entities.Credential;
import com.example.demo.models.CredentialDto;

@Mapper(componentModel = "spring")
public interface CredentialMapper {
    Credential dtoToEmbeddable(CredentialDto credentialDto);
}
