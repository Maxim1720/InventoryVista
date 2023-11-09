package ru.sasha.inventoryvista.service.crud.warehouse;

import org.springframework.stereotype.Service;
import ru.sasha.inventoryvista.dao.WareHouseDao;
import ru.sasha.inventoryvista.service.crud.Remover;

@Service
public class WareHouseRemover implements Remover {

    private final WareHouseDao dao;

    public WareHouseRemover(WareHouseDao dao) {
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
