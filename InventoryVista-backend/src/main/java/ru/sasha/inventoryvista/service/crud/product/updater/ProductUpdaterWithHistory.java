package ru.sasha.inventoryvista.service.crud.product.updater;

import jakarta.transaction.Transactional;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import ru.sasha.inventoryvista.dto.request.ProductRequestDto;
import ru.sasha.inventoryvista.dto.response.ProductResponseDto;
import ru.sasha.inventoryvista.entity.ExpirationHistory;
import ru.sasha.inventoryvista.service.crud.Updater;
import ru.sasha.inventoryvista.service.crud.expiration.history.ExpirationHistoryCreator;
import ru.sasha.inventoryvista.service.crud.product.finder.ProductFinder;

import java.util.Date;

@Log4j2
@Service
public class ProductUpdaterWithHistory implements Updater<ProductRequestDto, ProductResponseDto> {

    private final ProductUpdater productUpdater;
    private final ExpirationHistoryCreator expirationHistoryCreator;

    private final ProductFinder productFinder;

    public ProductUpdaterWithHistory(ProductUpdater productUpdater,
                                     ExpirationHistoryCreator expirationHistoryCreator, ProductFinder productFinder) {
        this.productUpdater = productUpdater;
        this.expirationHistoryCreator = expirationHistoryCreator;
        this.productFinder = productFinder;
    }

    @Transactional
    @Override
    public ProductResponseDto updateById(ProductRequestDto requestDto, Long id) {
        Date oldDate = productFinder.findById(id).getExpirationDate();
        ProductResponseDto responseDto = productUpdater.updateById(requestDto,id);

        ExpirationHistory history = new ExpirationHistory();
        history.setOldDate(oldDate);
        history.setNewDate(responseDto.getExpirationDate());
        history.setProduct(productFinder.findById(id));

        if(history.getOldDate().getTime()!=history.getNewDate().getTime()) {
            expirationHistoryCreator.create(history);
            log.info("History created!");
        }
        log.info(history.toString());
        return responseDto;
    }
}
