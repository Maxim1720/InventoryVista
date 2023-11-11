package ru.sasha.inventoryvista.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.NullValuePropertyMappingStrategy;
import ru.sasha.inventoryvista.dto.response.ExpirationHistoryResponseDto;
import ru.sasha.inventoryvista.entity.ExpirationHistory;

@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface ExpirationHistoryMapper {
    @Mapping(target = "productId", source = "product.id")
    ExpirationHistoryResponseDto toResponse(ExpirationHistory entity);
}
