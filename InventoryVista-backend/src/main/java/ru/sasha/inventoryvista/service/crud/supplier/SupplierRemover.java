package ru.sasha.inventoryvista.service.crud.supplier;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import ru.sasha.inventoryvista.entity.Supplier;
import ru.sasha.inventoryvista.service.crud.AbsRemover;

@Service
public class SupplierRemover extends AbsRemover<Supplier> {
    protected SupplierRemover(JpaRepository<Supplier, Long> dao) {
        super(dao);
    }
}
