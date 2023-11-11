package ru.sasha.inventoryvista.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.sasha.inventoryvista.entity.product.ProductInWareHouse;
import ru.sasha.inventoryvista.entity.product.ProductInWareHousePK;

public interface ProductInWareHouseDao extends JpaRepository<ProductInWareHouse, ProductInWareHousePK> {

}
