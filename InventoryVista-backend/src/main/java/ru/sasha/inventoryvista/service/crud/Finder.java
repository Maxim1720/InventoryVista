package ru.sasha.inventoryvista.service.crud;

import java.util.Set;

public interface Finder<E> {
    E findById(Long id);
    Set<E> findAll();

}
