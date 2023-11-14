package ru.sasha.inventoryvista.service.crud;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.sasha.inventoryvista.mapper.AbsMapper;

public abstract class AbsEntityCreator<E> implements Creator<E,E>{

    private final JpaRepository<E, Long> dao;

    protected AbsEntityCreator(JpaRepository<E, Long> dao) {
        this.dao = dao;
    }
    @Override
    public E create(E v) {
        return dao.save(v);
    }
}
