package ru.sasha.inventoryvista.service.crud;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.sasha.inventoryvista.mapper.AbsMapper;

public abstract class AbsUpdater<E,REQ, RESP> implements Updater<REQ,RESP>{

    private final AbsMapper<E,REQ,RESP> mapper;
    private final Finder<E> finder;
    private final JpaRepository<E, Long> dao;

    protected AbsUpdater(AbsMapper<E, REQ, RESP> mapper, Finder<E> finder, JpaRepository<E, Long> dao) {
        this.mapper = mapper;
        this.finder = finder;
        this.dao = dao;
    }

    @Override
    public RESP updateById(REQ req, Long id) {
        E e = finder.findById(id);
        return mapper.toResponse(dao.save(mapper.partialUpdate(req,e)));
    }
}
