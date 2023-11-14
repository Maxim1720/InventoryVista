package ru.sasha.inventoryvista.service.crud.supplier;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import ru.sasha.inventoryvista.entity.Supplier;
import ru.sasha.inventoryvista.service.crud.AbsEntityFinder;

@Service
public class SupplierEntityFinder extends AbsEntityFinder<Supplier> {


    protected SupplierEntityFinder(JpaRepository<Supplier, Long> dao) {
        super(dao);
    }
}
