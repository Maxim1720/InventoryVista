package ru.sasha.inventoryvista.service.crud.product;

import org.springframework.stereotype.Service;
import ru.sasha.inventoryvista.dao.ProductDao;
import ru.sasha.inventoryvista.dao.StorageConditionDao;
import ru.sasha.inventoryvista.service.crud.Remover;

import java.util.NoSuchElementException;

@Service
public class ProductRemover implements Remover {

    private final ProductDao productDao;
    private final StorageConditionDao storageConditionDao;

    public ProductRemover(ProductDao productDao, StorageConditionDao storageConditionDao) {
        this.productDao = productDao;
        this.storageConditionDao = storageConditionDao;
    }

    @Override
    public void removeById(Long id) {
        storageConditionDao.delete(storageConditionDao.findByProductId(id)
                .orElseThrow(()-> new NoSuchElementException("Storage Condition doesn't exists")));
        productDao.deleteById(id);
    }

    @Override
    public void removeAll() {
        storageConditionDao.deleteAll();
        productDao.deleteAll();
    }
}
