package ru.sasha.inventoryvista.service.crud.supply;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import ru.sasha.inventoryvista.dto.request.SupplyRequestDto;
import ru.sasha.inventoryvista.dto.response.SupplyResponseDto;
import ru.sasha.inventoryvista.entity.Supply;
import ru.sasha.inventoryvista.mapper.AbsMapper;
import ru.sasha.inventoryvista.service.crud.AbsUpdater;
import ru.sasha.inventoryvista.service.crud.Finder;

@Service
public class SupplyUpdater extends AbsUpdater<Supply, SupplyRequestDto, SupplyResponseDto> {

    protected SupplyUpdater(AbsMapper<Supply, SupplyRequestDto, SupplyResponseDto> mapper,
                            Finder<Supply> finder, JpaRepository<Supply, Long> dao) {
        super(mapper, finder, dao);
    }
}
