package ru.sasha.inventoryvista.service.crud.product.updater;

import org.springframework.stereotype.Service;
import ru.sasha.inventoryvista.dao.ProductDao;
import ru.sasha.inventoryvista.dto.request.ProductRequestDto;
import ru.sasha.inventoryvista.dto.response.ProductResponseDto;
import ru.sasha.inventoryvista.entity.Product;
import ru.sasha.inventoryvista.mapper.ProductMapper;
import ru.sasha.inventoryvista.service.crud.Updater;

import java.util.NoSuchElementException;

@Service
public class ProductUpdater implements Updater<ProductRequestDto, ProductResponseDto> {

    private final ProductMapper mapper;

    private final ProductDao productDao;
    public ProductUpdater(ProductMapper mapper, ProductDao productDao) {
        this.mapper = mapper;
        this.productDao = productDao;
    }

    @Override
    public ProductResponseDto updateById(ProductRequestDto productRequestDto, Long id) {
        Product product = productDao.findById(id).orElseThrow(()->new NoSuchElementException("Product doesn't exists"));
        mapper.partialUpdateEntity(productRequestDto, product);
        return mapper.toResponse(productDao.save(product));
    }
}
