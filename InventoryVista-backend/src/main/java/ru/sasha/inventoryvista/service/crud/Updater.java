package ru.sasha.inventoryvista.service.crud;

public interface Updater<V,R> {

    R updateById(V v, Long id);
//    R update(V v);
}
