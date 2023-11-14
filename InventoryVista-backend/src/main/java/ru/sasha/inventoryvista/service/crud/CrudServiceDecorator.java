package ru.sasha.inventoryvista.service.crud;

import java.util.Set;

public class CrudServiceDecorator<E,REQ,RESP> implements Creator<REQ,RESP>, Updater<REQ,RESP>, Finder<RESP>, Remover {

    private final AbsUpdater<E,REQ,RESP> updater;
    private final Creator<REQ,RESP> creator;

    public CrudServiceDecorator(AbsUpdater<E, REQ, RESP> updater, Creator<REQ, RESP> creator) {
        this.updater = updater;
        this.creator = creator;
    }

    @Override
    public RESP create(REQ req) {
        return creator.create(req);
    }

    @Override
    public RESP updateById(REQ req, Long id) {
        return updater.updateById(req,id);
    }

    @Override
    public RESP findById(Long id) {
        return null;
    }

    @Override
    public Set<RESP> findAll() {
        return null;
    }

    @Override
    public void removeById(Long id) {

    }

    @Override
    public void removeAll() {

    }
}
