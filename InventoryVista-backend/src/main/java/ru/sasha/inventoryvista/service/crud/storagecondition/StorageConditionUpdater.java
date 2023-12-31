package ru.sasha.inventoryvista.service.crud.storagecondition;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import ru.sasha.inventoryvista.dto.request.StorageConditionRequestDto;
import ru.sasha.inventoryvista.dto.response.StorageConditionResponseDto;
import ru.sasha.inventoryvista.entity.StorageCondition;
import ru.sasha.inventoryvista.mapper.AbsMapper;
import ru.sasha.inventoryvista.service.crud.AbsUpdater;

@Service
public class StorageConditionUpdater /*implements Updater<StorageConditionRequestDto, StorageConditionResponseDto>*/

    extends AbsUpdater<StorageCondition, StorageConditionRequestDto, StorageConditionResponseDto>
{
    protected StorageConditionUpdater(AbsMapper<StorageCondition, StorageConditionRequestDto,
            StorageConditionResponseDto> mapper, StorageConditionEntityFinder finder,
                                      JpaRepository<StorageCondition, Long> dao) {
        super(mapper, finder, dao);
    }
    /*private final StorageConditionDao dao;
    private final StorageConditionMapper mapper;
    public StorageConditionUpdater(StorageConditionDao dao, StorageConditionMapper mapper) {
        this.dao = dao;
        this.mapper = mapper;
    }*/

    /*@Override
    public StorageConditionResponseDto updateById(StorageConditionRequestDto storageConditionRequestDto, Long id) {
        StorageCondition storageCondition = dao.findByProductId(id).orElseThrow(()->
                new NoSuchElementException("Storage Condition doesn't exists"));
        mapper.partialUpdateEntity(storageConditionRequestDto, storageCondition);
        return mapper.toResponse(dao.save(storageCondition));
    }*/
}
