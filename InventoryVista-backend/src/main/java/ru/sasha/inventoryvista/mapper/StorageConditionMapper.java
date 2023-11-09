package ru.sasha.inventoryvista.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;
import ru.sasha.inventoryvista.dto.request.StorageConditionRequestDto;
import ru.sasha.inventoryvista.dto.response.StorageConditionResponseDto;
import ru.sasha.inventoryvista.entity.StorageCondition;

@Mapper(componentModel = "spring",
nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface StorageConditionMapper {

    @Mapping(source = "productId", target = "product.id")
    StorageCondition toEntity(StorageConditionRequestDto storageConditionRequestDto);

    @Mapping(source = "product.id", target = "productId")
    StorageConditionResponseDto toResponse(StorageCondition storageCondition);


    void partialUpdateEntity(StorageConditionRequestDto dto, @MappingTarget StorageCondition entity);
}
