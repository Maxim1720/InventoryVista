package ru.sasha.inventoryvista.service.crud;

public interface Creator<V,R> {
    R create(V v);
}
