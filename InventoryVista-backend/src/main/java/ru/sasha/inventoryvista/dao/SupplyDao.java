package ru.sasha.inventoryvista.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.sasha.inventoryvista.entity.Supply;

public interface SupplyDao extends JpaRepository<Supply, Long> {
}