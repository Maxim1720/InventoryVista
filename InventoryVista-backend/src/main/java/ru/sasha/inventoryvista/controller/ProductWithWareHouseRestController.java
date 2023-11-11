package ru.sasha.inventoryvista.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.sasha.inventoryvista.dto.ResponseDto;
import ru.sasha.inventoryvista.dto.request.product.ProductWithWareHouseRequestDto;
import ru.sasha.inventoryvista.service.crud.product.creator.ProductWithWareHouseCreator;

@RestController
@RequestMapping("v1/products")
public class ProductWithWareHouseRestController {

    private final ProductWithWareHouseCreator productWithWareHouseCreator;

    public ProductWithWareHouseRestController(ProductWithWareHouseCreator productWithWareHouseCreator) {
        this.productWithWareHouseCreator = productWithWareHouseCreator;
    }

    @PostMapping
    public ResponseEntity<ResponseDto> create(@RequestBody ProductWithWareHouseRequestDto dto){
        return ResponseEntity.ok(
                ResponseDto.builder()
                        .body(productWithWareHouseCreator.create(dto))
                        .code(HttpStatus.OK.value())
                        .message("created!")
                        .build()
                );
    }

}
