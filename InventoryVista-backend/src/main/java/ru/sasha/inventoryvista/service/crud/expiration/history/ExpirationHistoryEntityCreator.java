package ru.sasha.inventoryvista.service.crud.expiration.history;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import ru.sasha.inventoryvista.entity.ExpirationHistory;
import ru.sasha.inventoryvista.service.crud.AbsEntityCreator;

@Service
public class ExpirationHistoryEntityCreator extends AbsEntityCreator<ExpirationHistory> {

    protected ExpirationHistoryEntityCreator(JpaRepository<ExpirationHistory, Long> dao) {
        super(dao);
    }
}
