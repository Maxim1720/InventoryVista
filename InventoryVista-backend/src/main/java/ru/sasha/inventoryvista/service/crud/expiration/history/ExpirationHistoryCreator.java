package ru.sasha.inventoryvista.service.crud.expiration.history;

import org.springframework.stereotype.Service;
import ru.sasha.inventoryvista.dto.response.ExpirationHistoryResponseDto;
import ru.sasha.inventoryvista.entity.ExpirationHistory;
import ru.sasha.inventoryvista.mapper.AbsMapper;
import ru.sasha.inventoryvista.service.crud.AbsCreator;
import ru.sasha.inventoryvista.service.crud.AbsEntityCreator;

@Service
public class ExpirationHistoryCreator extends AbsCreator<ExpirationHistory, ExpirationHistory, ExpirationHistoryResponseDto> /*implements Creator<ExpirationHistory, ExpirationHistory>*/ {
    protected ExpirationHistoryCreator(AbsEntityCreator<ExpirationHistory> entityCreator,
                                       AbsMapper<ExpirationHistory, ExpirationHistory, ExpirationHistoryResponseDto> mapper) {
        super(entityCreator, mapper);
    }
}
