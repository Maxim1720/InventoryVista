package ru.sasha.inventoryvista.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.extensions.spring.SpringMapperConfig;
import ru.sasha.inventoryvista.dto.request.UserRegistrationRequestDto;
import ru.sasha.inventoryvista.entity.User;

@SpringMapperConfig
@Mapper(componentModel = "spring")
public interface UserMapper {
    User toUser(UserRegistrationRequestDto userRegistrationRequestDto);

}
