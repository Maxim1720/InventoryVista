package ru.sasha.inventoryvista.service.crud.warehouse;

import org.springframework.stereotype.Service;
import ru.sasha.inventoryvista.dao.WareHouseDao;
import ru.sasha.inventoryvista.dto.request.WareHouseRequestDto;
import ru.sasha.inventoryvista.dto.response.WareHouseResponseDto;
import ru.sasha.inventoryvista.entity.WareHouse;
import ru.sasha.inventoryvista.mapper.WareHouseMapper;
import ru.sasha.inventoryvista.service.crud.Creator;

@Service
public class WareHouseCreator implements Creator<WareHouseRequestDto, WareHouseResponseDto> {

    private final WareHouseMapper wareHouseMapper;
    private final WareHouseDao wareHouseDao;
    public WareHouseCreator(WareHouseMapper wareHouseMapper, WareHouseDao wareHouseDao) {
        this.wareHouseMapper = wareHouseMapper;
        this.wareHouseDao = wareHouseDao;
    }

    @Override
    public WareHouseResponseDto create(WareHouseRequestDto wareHouse) {
        WareHouse wh = wareHouseMapper.toEntity(wareHouse);
        return wareHouseMapper.toResponse(
                wareHouseDao.save(wh)
        );
    }
}
