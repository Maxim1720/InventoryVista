package ru.sasha.inventoryvista.service.crud.supply;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import ru.sasha.inventoryvista.entity.Supply;
import ru.sasha.inventoryvista.service.crud.AbsRemover;

@Service
public class SupplyRemover extends AbsRemover<Supply> {
    protected SupplyRemover(JpaRepository<Supply, Long> dao) {
        super(dao);
    }
}
