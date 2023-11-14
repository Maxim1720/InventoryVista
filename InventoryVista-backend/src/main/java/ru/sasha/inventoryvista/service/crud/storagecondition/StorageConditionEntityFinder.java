package ru.sasha.inventoryvista.service.crud.storagecondition;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import ru.sasha.inventoryvista.entity.StorageCondition;
import ru.sasha.inventoryvista.service.crud.AbsEntityFinder;

@Service
public class StorageConditionEntityFinder extends AbsEntityFinder<StorageCondition> {

    protected StorageConditionEntityFinder(JpaRepository<StorageCondition, Long> dao) {
        super(dao);
    }
}
