package ru.sasha.inventoryvista.service.crud.storagecondition;

import org.springframework.stereotype.Service;
import ru.sasha.inventoryvista.dto.request.StorageConditionRequestDto;
import ru.sasha.inventoryvista.dto.response.StorageConditionResponseDto;
import ru.sasha.inventoryvista.entity.StorageCondition;
import ru.sasha.inventoryvista.mapper.AbsMapper;
import ru.sasha.inventoryvista.service.crud.AbsCreator;
import ru.sasha.inventoryvista.service.crud.AbsEntityCreator;

@Service
public class StorageConditionCreator extends AbsCreator<StorageCondition, StorageConditionRequestDto, StorageConditionResponseDto> {
    protected StorageConditionCreator(AbsEntityCreator<StorageCondition> entityCreator,
                                      AbsMapper<StorageCondition, StorageConditionRequestDto, StorageConditionResponseDto> mapper) {
        super(entityCreator, mapper);
    }

    /*private final StorageConditionDao storageConditionDao;

    public StorageConditionCreator(StorageConditionDao storageConditionDao) {
        this.storageConditionDao = storageConditionDao;
    }

    @Override
    public StorageCondition create(StorageCondition storageCondition) {
        return storageConditionDao.save(storageCondition);
    }*/

}
