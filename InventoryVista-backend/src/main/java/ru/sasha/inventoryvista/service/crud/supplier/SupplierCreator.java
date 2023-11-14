package ru.sasha.inventoryvista.service.crud.supplier;

import org.springframework.stereotype.Service;
import ru.sasha.inventoryvista.dao.SupplierDao;
import ru.sasha.inventoryvista.dto.request.SupplierRequestDto;
import ru.sasha.inventoryvista.dto.response.SupplierResponseDto;
import ru.sasha.inventoryvista.mapper.SupplierMapper;
import ru.sasha.inventoryvista.service.crud.Creator;

@Service
public class SupplierCreator implements Creator<SupplierRequestDto, SupplierResponseDto> {

    private final SupplierDao supplierDao;
    private final SupplierMapper mapper;

    public SupplierCreator(SupplierDao supplierDao, SupplierMapper mapper) {
        this.supplierDao = supplierDao;
        this.mapper = mapper;
    }

    @Override
    public SupplierResponseDto create(SupplierRequestDto dto) {
        return mapper.toDto(supplierDao.save(mapper.toEntity(dto)));
    }
}
