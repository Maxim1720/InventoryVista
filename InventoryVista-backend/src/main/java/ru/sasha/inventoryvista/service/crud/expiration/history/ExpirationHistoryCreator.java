package ru.sasha.inventoryvista.service.crud.expiration.history;

import org.springframework.stereotype.Service;
import ru.sasha.inventoryvista.dao.ExpirationHistoryDao;
import ru.sasha.inventoryvista.entity.ExpirationHistory;
import ru.sasha.inventoryvista.service.crud.Creator;

@Service
public class ExpirationHistoryCreator implements Creator<ExpirationHistory, ExpirationHistory> {
    private final ExpirationHistoryDao dao;
    public ExpirationHistoryCreator(ExpirationHistoryDao dao) {
        this.dao = dao;
    }
    @Override
    public ExpirationHistory create(ExpirationHistory expirationHistory) {
        return dao.save(expirationHistory);
    }
}
