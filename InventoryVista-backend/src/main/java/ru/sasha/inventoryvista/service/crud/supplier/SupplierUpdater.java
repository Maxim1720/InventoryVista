package ru.sasha.inventoryvista.service.crud.supplier;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import ru.sasha.inventoryvista.dto.request.SupplierRequestDto;
import ru.sasha.inventoryvista.dto.response.SupplierResponseDto;
import ru.sasha.inventoryvista.entity.Supplier;
import ru.sasha.inventoryvista.mapper.AbsMapper;
import ru.sasha.inventoryvista.service.crud.AbsUpdater;
import ru.sasha.inventoryvista.service.crud.Finder;

@Service
public class SupplierUpdater extends AbsUpdater<Supplier, SupplierRequestDto, SupplierResponseDto> {

    protected SupplierUpdater(AbsMapper<Supplier, SupplierRequestDto, SupplierResponseDto> mapper,
                              Finder<Supplier> finder,
                              JpaRepository<Supplier, Long> dao) {
        super(mapper, finder, dao);
    }
}
