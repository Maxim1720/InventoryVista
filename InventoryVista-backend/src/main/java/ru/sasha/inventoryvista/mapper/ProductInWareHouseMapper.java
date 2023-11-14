package ru.sasha.inventoryvista.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.NullValuePropertyMappingStrategy;
import ru.sasha.inventoryvista.dto.request.product.ProductWithWareHouseRequestDto;
import ru.sasha.inventoryvista.entity.product.ProductInWareHouse;

@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface ProductInWareHouseMapper {

//    @Mapping(target = "id.productId", source = "product")
    ProductInWareHouse toEntity(ProductWithWareHouseRequestDto dto);
}
