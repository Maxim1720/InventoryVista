package ru.sasha.inventoryvista.service.crud.expiration.history;

import org.springframework.stereotype.Service;
import ru.sasha.inventoryvista.dao.ExpirationHistoryDao;
import ru.sasha.inventoryvista.dto.response.ExpirationHistoryResponseDto;
import ru.sasha.inventoryvista.mapper.ExpirationHistoryMapper;
import ru.sasha.inventoryvista.service.crud.Finder;

import java.util.NoSuchElementException;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class ExpirationHistoryFinder implements Finder<ExpirationHistoryResponseDto> {

    private final ExpirationHistoryMapper mapper;
    private final ExpirationHistoryDao dao;
    public ExpirationHistoryFinder(ExpirationHistoryMapper mapper,
                                   ExpirationHistoryDao dao) {
        this.mapper = mapper;
        this.dao = dao;
    }

    @Override
    public ExpirationHistoryResponseDto findById(Long id) {
        return  mapper.toResponse(dao.findById(id).orElseThrow(()->new NoSuchElementException("Expiration History doesn't exists")));
    }

    @Override
    public Set<ExpirationHistoryResponseDto> findAll() {
        return dao.findAll().stream().map(mapper::toResponse).collect(Collectors.toSet());
    }

    public Set<ExpirationHistoryResponseDto> findByProductId(Long productId){
        return dao.findAllByProductId(productId).stream().map(mapper::toResponse).collect(Collectors.toSet());
    }
}
