package ru.sasha.inventoryvista.service.crud;

import org.springframework.data.jpa.repository.JpaRepository;

public abstract class AbsRemover<E> implements Remover{

    private final JpaRepository<E, Long> dao;

    protected AbsRemover(JpaRepository<E, Long> dao) {
        this.dao = dao;
    }

    @Override
    public void removeById(Long id) {
        dao.deleteById(id);
    }

    @Override
    public void removeAll() {
        dao.deleteAll();
    }
}
