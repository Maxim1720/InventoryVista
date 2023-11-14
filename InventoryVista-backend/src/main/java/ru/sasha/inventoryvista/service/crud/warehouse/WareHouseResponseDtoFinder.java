package ru.sasha.inventoryvista.service.crud.warehouse;

import org.springframework.stereotype.Service;
import ru.sasha.inventoryvista.dao.WareHouseDao;
import ru.sasha.inventoryvista.dto.response.WareHouseResponseDto;
import ru.sasha.inventoryvista.mapper.WareHouseMapper;
import ru.sasha.inventoryvista.service.crud.Finder;

import java.util.NoSuchElementException;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class WareHouseResponseDtoFinder implements Finder<WareHouseResponseDto> {

    private final WareHouseDao dao;
    private final WareHouseMapper mapper;

    public WareHouseResponseDtoFinder(WareHouseDao dao, WareHouseMapper mapper) {
        this.dao = dao;
        this.mapper = mapper;
    }

    @Override
    public WareHouseResponseDto findById(Long id) {
        return mapper.toResponse(dao.findById(id).orElseThrow(()->new NoSuchElementException("Warehouse doesn't exists")));
    }

    @Override
    public Set<WareHouseResponseDto> findAll() {
        return dao.findAll().stream().map(mapper::toResponse).collect(Collectors.toSet());
    }
}
