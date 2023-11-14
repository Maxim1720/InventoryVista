package ru.sasha.inventoryvista.service.crud.product.creator;

import org.springframework.stereotype.Service;
import ru.sasha.inventoryvista.dao.ProductInWareHouseDao;
import ru.sasha.inventoryvista.dto.request.product.ProductWithWareHouseRequestDto;
import ru.sasha.inventoryvista.dto.response.ProductResponseDto;
import ru.sasha.inventoryvista.dto.response.ProductWithWareHouseResponseDto;
import ru.sasha.inventoryvista.entity.product.ProductInWareHouse;
import ru.sasha.inventoryvista.entity.product.ProductInWareHousePK;
import ru.sasha.inventoryvista.service.crud.Creator;

@Service
public class ProductWithWareHouseCreator implements Creator<ProductWithWareHouseRequestDto, ProductWithWareHouseResponseDto> {

    private final ProductCreator productCreator;
    private final ProductInWareHouseDao productInWareHouseDao;
    public ProductWithWareHouseCreator(ProductCreator productCreator,
                                       ProductInWareHouseDao productInWareHouseDao) {
        this.productCreator = productCreator;
        this.productInWareHouseDao = productInWareHouseDao;
    }

    @Override
    public ProductWithWareHouseResponseDto create(ProductWithWareHouseRequestDto productWithWareHouseRequestDto) {
        ProductResponseDto product =  productCreator.create(productWithWareHouseRequestDto.getProduct());

        ProductInWareHouse productInWareHouse = productInWareHouseDao.save(ProductInWareHouse.builder()
                        .id(ProductInWareHousePK.builder()
                                .wareHouseId(productWithWareHouseRequestDto.getWareHouseId())
                                .productId(product.getId())
                                .build())
                .build());

        return ProductWithWareHouseResponseDto.builder()
                .product(product)
                .wareHouseId(productInWareHouse.getId().getWareHouseId())
                .build();
    }
}
