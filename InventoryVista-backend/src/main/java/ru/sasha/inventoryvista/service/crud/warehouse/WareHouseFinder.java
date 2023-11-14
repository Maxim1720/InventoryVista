package ru.sasha.inventoryvista.service.crud.warehouse;

import org.springframework.stereotype.Service;
import ru.sasha.inventoryvista.dao.WareHouseDao;
import ru.sasha.inventoryvista.entity.WareHouse;
import ru.sasha.inventoryvista.service.crud.Finder;

import java.util.HashSet;
import java.util.NoSuchElementException;
import java.util.Set;

@Service
public class WareHouseFinder implements Finder<WareHouse> {

    private final WareHouseDao dao;

    public WareHouseFinder(WareHouseDao dao) {
        this.dao = dao;
    }

    @Override
    public WareHouse findById(Long id) {
        return dao.findById(id).orElseThrow(()->new NoSuchElementException("WareHouse doesn't exists"));
    }

    @Override
    public Set<WareHouse> findAll() {
        return new HashSet<>(dao.findAll());
    }
}
