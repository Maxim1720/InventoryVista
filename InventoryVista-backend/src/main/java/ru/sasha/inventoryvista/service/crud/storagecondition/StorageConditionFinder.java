package ru.sasha.inventoryvista.service.crud.storagecondition;

import org.springframework.stereotype.Service;
import ru.sasha.inventoryvista.dao.StorageConditionDao;
import ru.sasha.inventoryvista.entity.StorageCondition;
import ru.sasha.inventoryvista.service.crud.Finder;

import java.util.HashSet;
import java.util.NoSuchElementException;
import java.util.Set;

@Service
public class StorageConditionFinder implements Finder<StorageCondition> {

    private final StorageConditionDao dao;

    public StorageConditionFinder(StorageConditionDao dao) {
        this.dao = dao;
    }

    @Override
    public StorageCondition findById(Long id) {
        return dao.findById(id).orElseThrow(()->new NoSuchElementException("Storage condition doesn't exists"));
    }

    @Override
    public Set<StorageCondition> findAll() {
        return new HashSet<>(dao.findAll());
    }

    public StorageCondition findByProductId(Long productId){
        return dao.findByProductId(productId).orElseThrow();
    }
}
