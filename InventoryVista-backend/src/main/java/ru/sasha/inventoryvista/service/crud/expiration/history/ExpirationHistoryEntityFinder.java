package ru.sasha.inventoryvista.service.crud.expiration.history;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import ru.sasha.inventoryvista.dao.ExpirationHistoryDao;
import ru.sasha.inventoryvista.entity.ExpirationHistory;
import ru.sasha.inventoryvista.service.crud.AbsEntityFinder;

import java.util.Set;

@Service
public class ExpirationHistoryEntityFinder extends AbsEntityFinder<ExpirationHistory> {

    private final ExpirationHistoryDao expirationHistoryDao;

    protected ExpirationHistoryEntityFinder(JpaRepository<ExpirationHistory, Long> dao, ExpirationHistoryDao expirationHistoryDao) {
        super(dao);
        this.expirationHistoryDao = expirationHistoryDao;
    }

    public Set<ExpirationHistory> findAllByProductId(Long productId){
        return expirationHistoryDao.findAllByProductId(productId);
    }

}
