package ru.sasha.inventoryvista.mapper;

import org.mapstruct.*;
import ru.sasha.inventoryvista.dto.request.ProductRequestDto;
import ru.sasha.inventoryvista.dto.response.ProductResponseDto;
import ru.sasha.inventoryvista.entity.Product;

import java.util.Set;

@Mapper(componentModel = "spring",
        uses = {StorageConditionMapper.class},
        nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE
)
public interface ProductMapper {
    ProductResponseDto toResponse(Product p);
    Set<ProductResponseDto> toResponseSet(Set<Product> products);
    Product toEntity(ProductRequestDto p);
    void partialUpdateEntity(ProductRequestDto requestDto, @MappingTarget Product product);
}
