package ru.sasha.inventoryvista.mapper;

import org.mapstruct.*;
import ru.sasha.inventoryvista.dto.request.SupplyRequestDto;
import ru.sasha.inventoryvista.dto.response.SupplyResponseDto;
import ru.sasha.inventoryvista.entity.Supply;

@Mapper(unmappedTargetPolicy = ReportingPolicy.WARN, componentModel = MappingConstants.ComponentModel.SPRING,
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface SupplyMapper {
    @Mapping(source = "productId", target = "product.id")
    @Mapping(source = "supplierId", target = "supplier.id")
    Supply toEntity(SupplyRequestDto supplyRequestDto);

    @InheritInverseConfiguration(name = "toEntity")
    SupplyRequestDto toDto(Supply supply);

    @InheritConfiguration(name = "toEntity")
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    Supply partialUpdate(SupplyRequestDto supplyRequestDto, @MappingTarget Supply supply);

    @Mapping(source = "productId", target = "product.id")
    @Mapping(source = "supplierId", target = "supplier.id")
    Supply toEntity(SupplyResponseDto supplyResponseDto);

    @InheritInverseConfiguration(name = "toEntity")
    SupplyResponseDto toDto1(Supply supply);

    @InheritConfiguration(name = "toEntity")
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    Supply partialUpdate(SupplyResponseDto supplyResponseDto, @MappingTarget Supply supply);
}