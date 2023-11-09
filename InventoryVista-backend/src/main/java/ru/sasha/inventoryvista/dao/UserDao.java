package ru.sasha.inventoryvista.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.sasha.inventoryvista.entity.User;

import java.util.Optional;

public interface UserDao extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
