package ru.sasha.inventoryvista.mapper;

import org.mapstruct.*;
import ru.sasha.inventoryvista.dto.request.SupplierRequestDto;
import ru.sasha.inventoryvista.dto.response.SupplierResponseDto;
import ru.sasha.inventoryvista.entity.Supplier;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = MappingConstants.ComponentModel.SPRING,
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface SupplierMapper extends AbsMapper<Supplier, SupplierRequestDto, SupplierResponseDto>{
    Supplier toEntity(SupplierRequestDto dto);
    SupplierResponseDto toDto(Supplier supplier);
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    Supplier partialUpdate(SupplierRequestDto dto, @MappingTarget Supplier entity);
}