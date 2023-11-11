package ru.sasha.inventoryvista.service.crud.product.creator;

import jakarta.persistence.EntityExistsException;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.stereotype.Service;
import ru.sasha.inventoryvista.dao.ProductDao;
import ru.sasha.inventoryvista.dto.request.ProductRequestDto;
import ru.sasha.inventoryvista.dto.response.ProductResponseDto;
import ru.sasha.inventoryvista.entity.Product;
import ru.sasha.inventoryvista.mapper.ProductMapper;
import ru.sasha.inventoryvista.service.crud.Creator;

@Service
public class ProductCreator implements Creator<ProductRequestDto, ProductResponseDto> {

    private final ProductDao productDao;
    private final ProductMapper productMapper;
    public ProductCreator(ProductDao productDao, ProductMapper productMapper) {
        this.productDao = productDao;
        this.productMapper = productMapper;
    }

    private class CreatedProductExample implements Example<Product>{

        private final Product example;
        public CreatedProductExample(Product example){
            this.example = example;
        }
        @Override
        public Product getProbe() {
            return Product.builder()
                    .description(example.getDescription())
                    .expirationDate(example.getExpirationDate())
                    .quantity(example.getQuantity())
                    .name(example.getName())
                    .build();
        }

        @Override
        public ExampleMatcher getMatcher() {
            return ExampleMatcher.matchingAll();
        }
    }
    @Override
    public ProductResponseDto create(ProductRequestDto product) {
        Product p = productMapper.toEntity(product);
        if(productDao.exists(new CreatedProductExample(p))){
            throw new EntityExistsException("Product " + product.toString() + " exists!");
        }
        return productMapper.toResponse(productDao.save(p));
    }
}
