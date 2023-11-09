package ru.sasha.inventoryvista.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.sasha.inventoryvista.entity.StorageCondition;

import java.util.Optional;

public interface StorageConditionDao extends JpaRepository<StorageCondition, Long> {
    Optional<StorageCondition> findByProductId(Long productId);
}
