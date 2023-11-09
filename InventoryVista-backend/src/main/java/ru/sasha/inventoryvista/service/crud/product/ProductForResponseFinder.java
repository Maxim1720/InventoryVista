package ru.sasha.inventoryvista.service.crud.product;

import org.springframework.stereotype.Service;
import ru.sasha.inventoryvista.dto.response.ProductResponseDto;
import ru.sasha.inventoryvista.mapper.ProductMapper;
import ru.sasha.inventoryvista.service.crud.Finder;

import java.util.Set;

@Service
public class ProductForResponseFinder implements Finder<ProductResponseDto> {

    private final ProductMapper productMapper;
    private final ProductFinder productFinder;
    public ProductForResponseFinder(ProductMapper productMapper, ProductFinder productFinder) {
        this.productMapper = productMapper;
        this.productFinder = productFinder;
    }

    @Override
    public ProductResponseDto findById(Long id) {
        return productMapper.toResponse(productFinder.findById(id));
    }

    @Override
    public Set<ProductResponseDto> findAll() {
        return productMapper.toResponseSet(productFinder.findAll());
    }
}
