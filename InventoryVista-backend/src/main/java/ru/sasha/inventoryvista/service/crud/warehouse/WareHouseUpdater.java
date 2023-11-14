package ru.sasha.inventoryvista.service.crud.warehouse;

import org.springframework.stereotype.Service;
import ru.sasha.inventoryvista.dao.WareHouseDao;
import ru.sasha.inventoryvista.dto.request.WareHouseRequestDto;
import ru.sasha.inventoryvista.dto.response.WareHouseResponseDto;
import ru.sasha.inventoryvista.entity.WareHouse;
import ru.sasha.inventoryvista.mapper.WareHouseMapper;
import ru.sasha.inventoryvista.service.crud.Finder;
import ru.sasha.inventoryvista.service.crud.Updater;

@Service
public class WareHouseUpdater implements Updater<WareHouseRequestDto, WareHouseResponseDto> {

    private final Finder<WareHouse> wareHouseFinder;
    private final WareHouseDao wareHouseDao;
    private final WareHouseMapper wareHouseMapper;
    public WareHouseUpdater(Finder<WareHouse> wareHouseFinder, WareHouseDao wareHouseDao, WareHouseMapper wareHouseMapper) {
        this.wareHouseFinder = wareHouseFinder;
        this.wareHouseDao = wareHouseDao;
        this.wareHouseMapper = wareHouseMapper;
    }

    @Override
    public WareHouseResponseDto updateById(WareHouseRequestDto wareHouseRequestDto, Long id) {
        WareHouse wh = wareHouseFinder.findById(id);
        wareHouseMapper.partialUpdate(wareHouseRequestDto, wh);
        return wareHouseMapper.toResponse(wareHouseDao.save(wh));
    }
}
