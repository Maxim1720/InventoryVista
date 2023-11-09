package ru.sasha.inventoryvista.service.crud.storagecondition;

import org.springframework.stereotype.Service;
import ru.sasha.inventoryvista.dao.StorageConditionDao;
import ru.sasha.inventoryvista.entity.StorageCondition;
import ru.sasha.inventoryvista.service.crud.Creator;

@Service
public class StorageConditionCreator implements Creator<StorageCondition, StorageCondition> {

    private final StorageConditionDao storageConditionDao;

    public StorageConditionCreator(StorageConditionDao storageConditionDao) {
        this.storageConditionDao = storageConditionDao;
    }

    @Override
    public StorageCondition create(StorageCondition storageCondition) {
        return storageConditionDao.save(storageCondition);
    }
}
