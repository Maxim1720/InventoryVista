package ru.sasha.inventoryvista.service.crud;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.HashSet;
import java.util.NoSuchElementException;
import java.util.Set;

public abstract class AbsEntityFinder<R> implements Finder<R> {

    private final JpaRepository<R,Long> dao;

    protected AbsEntityFinder(JpaRepository<R, Long> dao) {
        this.dao = dao;
    }

    @Override
    public R findById(Long id) {
        return dao.findById(id).orElseThrow(NoSuchElementException::new);
    }

    @Override
    public Set<R> findAll() {
        return new HashSet<>(dao.findAll());
    }
}
