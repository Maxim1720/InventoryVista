package ru.sasha.inventoryvista.service.crud;

import ru.sasha.inventoryvista.mapper.AbsMapper;

public abstract class AbsCreator<E,V,R> implements Creator<V,R>{

    private final AbsEntityCreator<E> entityCreator;
    private final AbsMapper<E,V,R> mapper;
    protected AbsCreator(AbsEntityCreator<E> entityCreator, AbsMapper<E, V, R> mapper) {
        this.entityCreator = entityCreator;
        this.mapper = mapper;
    }

    @Override
    public R create(V v) {
        return mapper.toResponse(entityCreator.create(mapper.toEntity(v)));
    }
}
