package ru.sasha.inventoryvista.mapper;

import org.mapstruct.MappingTarget;

public interface AbsMapper<E,REQ, RESP> {
    E toEntity(REQ dto);
    RESP toResponse(E e);
    E partialUpdate(REQ dto, @MappingTarget E entity);
}
