package ru.sasha.inventoryvista.service.crud;

import ru.sasha.inventoryvista.mapper.AbsMapper;

import java.util.Set;
import java.util.stream.Collectors;

public abstract class AbsFinder<E,REQ, RESP> implements Finder<RESP> {

    private final AbsMapper<E,REQ,RESP> mapper;
    private final AbsEntityFinder<E> entityFinder;

    protected AbsFinder(AbsMapper<E, REQ, RESP> mapper, AbsEntityFinder<E> entityFinder) {
        this.mapper = mapper;
        this.entityFinder = entityFinder;
    }

    @Override
    public RESP findById(Long id) {
        return mapper.toResponse(entityFinder.findById(id));
    }

    @Override
    public Set<RESP> findAll() {
        return entityFinder.findAll().stream().map(mapper::toResponse).collect(Collectors.toSet());
    }
}
