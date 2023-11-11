package ru.sasha.inventoryvista.service.crud.supply;

import org.springframework.stereotype.Service;
import ru.sasha.inventoryvista.dao.SupplyDao;
import ru.sasha.inventoryvista.dto.response.SupplyResponseDto;
import ru.sasha.inventoryvista.mapper.SupplyMapper;
import ru.sasha.inventoryvista.service.crud.Finder;

import java.util.NoSuchElementException;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class SupplyFinder implements Finder<SupplyResponseDto> {

    private final SupplyDao supplyDao;
    private final SupplyMapper supplyMapper;
    public SupplyFinder(SupplyDao supplyDao, SupplyMapper supplyMapper) {
        this.supplyDao = supplyDao;
        this.supplyMapper = supplyMapper;
    }

    @Override
    public SupplyResponseDto findById(Long id) {

        return supplyMapper.toDto1(supplyDao.findById(id).orElseThrow(()->new NoSuchElementException("Supply doesn't exists")));
    }

    @Override
    public Set<SupplyResponseDto> findAll() {
        return supplyDao.findAll().stream().map(supplyMapper::toDto1).collect(Collectors.toSet());
    }
}
