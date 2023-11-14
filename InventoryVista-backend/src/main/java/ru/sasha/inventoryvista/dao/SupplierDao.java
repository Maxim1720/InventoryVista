package ru.sasha.inventoryvista.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.sasha.inventoryvista.entity.Supplier;

public interface SupplierDao extends JpaRepository<Supplier, Long> {
}