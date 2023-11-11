package ru.sasha.inventoryvista.service.crud.supply;

import org.springframework.stereotype.Service;
import ru.sasha.inventoryvista.dao.SupplyDao;
import ru.sasha.inventoryvista.dto.request.SupplyRequestDto;
import ru.sasha.inventoryvista.dto.response.SupplyResponseDto;
import ru.sasha.inventoryvista.mapper.SupplyMapper;
import ru.sasha.inventoryvista.service.crud.Creator;

@Service
public class SupplyCreator implements Creator<SupplyRequestDto, SupplyResponseDto> {

    private final SupplyDao supplyDao;
    private final SupplyMapper supplyMapper;
    public SupplyCreator(SupplyDao supplyDao, SupplyMapper supplyMapper) {
        this.supplyDao = supplyDao;
        this.supplyMapper = supplyMapper;
    }

    @Override
    public SupplyResponseDto create(SupplyRequestDto supplyRequestDto) {
        return supplyMapper.toDto1(supplyDao.save(supplyMapper.toEntity(supplyRequestDto)));
    }
}
