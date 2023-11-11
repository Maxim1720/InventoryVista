package ru.sasha.inventoryvista.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.sasha.inventoryvista.entity.ExpirationHistory;

import java.util.Set;

public interface ExpirationHistoryDao extends JpaRepository<ExpirationHistory, Long> {
    Set<ExpirationHistory> findAllByProductId(Long id);
}
