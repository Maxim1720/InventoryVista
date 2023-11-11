package ru.sasha.inventoryvista.service.crud.supplier;

import org.springframework.stereotype.Service;
import ru.sasha.inventoryvista.dao.SupplierDao;
import ru.sasha.inventoryvista.dto.response.SupplierResponseDto;
import ru.sasha.inventoryvista.mapper.SupplierMapper;
import ru.sasha.inventoryvista.service.crud.Finder;

import java.util.NoSuchElementException;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class SupplierFinder implements Finder<SupplierResponseDto> {

    private final SupplierDao dao;
    private final SupplierMapper mapper;
    public SupplierFinder(SupplierDao dao, SupplierMapper mapper) {
        this.dao = dao;
        this.mapper = mapper;
    }

    @Override
    public SupplierResponseDto findById(Long id) {
        return mapper.toDto(dao.findById(id).orElseThrow(()-> new NoSuchElementException("Supplier doesn't exists")));
    }

    @Override
    public Set<SupplierResponseDto> findAll() {
        return dao.findAll().stream().map(mapper::toDto).collect(Collectors.toSet());
    }
}



