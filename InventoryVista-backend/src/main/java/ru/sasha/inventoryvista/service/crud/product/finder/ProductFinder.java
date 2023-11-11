package ru.sasha.inventoryvista.service.crud.product.finder;

import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import ru.sasha.inventoryvista.dao.ProductDao;
import ru.sasha.inventoryvista.entity.Product;
import ru.sasha.inventoryvista.service.crud.Finder;

import java.util.HashMap;
import java.util.HashSet;
import java.util.NoSuchElementException;
import java.util.Set;

@Service
public class ProductFinder implements Finder<Product> {

    private final ProductDao productDao;

    public ProductFinder(ProductDao productDao) {
        this.productDao = productDao;
    }

    @Override
    public Product findById(Long id) {
        return productDao.findById(id).orElseThrow(()->new NoSuchElementException("Product doesn't exists"));
    }

    @Override
    public Set<Product> findAll() {
        return new HashSet<>(productDao.findAll());
    }

    public Long count(){
        return productDao.count();
    }
}
