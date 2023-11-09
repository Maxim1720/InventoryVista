package ru.sasha.inventoryvista.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.sasha.inventoryvista.entity.WareHouse;

public interface WareHouseDao extends JpaRepository<WareHouse, Long> {

}
