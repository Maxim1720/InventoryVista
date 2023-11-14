package ru.sasha.inventoryvista.service.crud.storagecondition;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import ru.sasha.inventoryvista.entity.StorageCondition;
import ru.sasha.inventoryvista.service.crud.AbsEntityCreator;

@Service
public class StorageConditionEntityCreator extends AbsEntityCreator<StorageCondition> {
    protected StorageConditionEntityCreator(JpaRepository<StorageCondition, Long> dao) {
        super(dao);
    }
}
