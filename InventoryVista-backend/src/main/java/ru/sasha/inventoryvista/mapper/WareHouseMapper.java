package ru.sasha.inventoryvista.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;
import ru.sasha.inventoryvista.dto.request.WareHouseRequestDto;
import ru.sasha.inventoryvista.dto.response.WareHouseResponseDto;
import ru.sasha.inventoryvista.entity.WareHouse;

import java.util.Set;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING,
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface WareHouseMapper extends AbsMapper<WareHouse,WareHouseRequestDto, WareHouseResponseDto>{

    WareHouseResponseDto toResponse(WareHouse wareHouse);
    WareHouse toEntity(WareHouseRequestDto wareHouseRequestDto);

    Set<WareHouseResponseDto> toResponses(Set<WareHouse> wareHouses);
    WareHouse partialUpdate(WareHouseRequestDto dto, @MappingTarget WareHouse entity);
}
