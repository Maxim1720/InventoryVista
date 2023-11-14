package ru.sasha.inventoryvista.service.crud.supply;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import ru.sasha.inventoryvista.entity.Supply;
import ru.sasha.inventoryvista.service.crud.AbsEntityFinder;

@Service
public class SupplyFinder extends AbsEntityFinder<Supply> {
    protected SupplyFinder(JpaRepository<Supply, Long> dao) {
        super(dao);
    }
}
