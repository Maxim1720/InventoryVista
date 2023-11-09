package ru.sasha.inventoryvista.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.sasha.inventoryvista.entity.Product;

public interface ProductDao extends JpaRepository<Product, Long> {

}
