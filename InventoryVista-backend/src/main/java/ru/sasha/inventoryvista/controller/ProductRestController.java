package ru.sasha.inventoryvista.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.sasha.inventoryvista.dto.ResponseDto;
import ru.sasha.inventoryvista.dto.request.ProductRequestDto;
import ru.sasha.inventoryvista.service.crud.product.*;
import ru.sasha.inventoryvista.service.crud.product.creator.ProductCreator;
import ru.sasha.inventoryvista.service.crud.product.finder.ProductFinder;
import ru.sasha.inventoryvista.service.crud.product.finder.ProductForResponseFinder;
import ru.sasha.inventoryvista.service.crud.product.updater.ProductUpdater;
import ru.sasha.inventoryvista.service.crud.product.updater.ProductUpdaterWithHistory;

@RestController
@RequestMapping("/products")
public class ProductRestController implements RestCrudController<ProductRequestDto>{

    private final ProductCreator productCreateService;
    private final ProductForResponseFinder productForResponseFinder;

    private final ProductFinder productFinder;

    private final ProductUpdater productUpdater;

    private final ProductRemover productRemover;

    private final ProductUpdaterWithHistory productUpdaterWithHistory;

    public ProductRestController(ProductCreator productCreateService,
                                 ProductForResponseFinder productForResponseFinder,
                                 ProductFinder productFinder,
                                 ProductUpdater productUpdater,
                                 ProductRemover productRemover,
                                 ProductUpdaterWithHistory productUpdaterWithHistory) {
        this.productCreateService = productCreateService;
        this.productForResponseFinder = productForResponseFinder;
        this.productFinder = productFinder;
        this.productUpdater = productUpdater;
        this.productRemover = productRemover;
        this.productUpdaterWithHistory = productUpdaterWithHistory;
    }

    @PostMapping
    public ResponseEntity<ResponseDto> create(@RequestBody ProductRequestDto product){
        return ResponseEntity.ok(
                ResponseDto.builder()
                        .body(productCreateService.create(product))
                        .code(HttpStatus.OK.value())
                        .build()
        );
    }

    @GetMapping
    public ResponseEntity<ResponseDto> get(){
        return ResponseEntity.ok(
                ResponseDto.builder()
                        .body(productForResponseFinder.findAll())
                        .code(HttpStatus.OK.value())
                        .build()
        );
    }

    @GetMapping(params = "count")
    public ResponseEntity<ResponseDto> count(){
        Long count = productFinder.count();
        return ResponseEntity.ok(
                ResponseDto.builder()
                        .body(count)
                        .code(HttpStatus.OK.value())
                        .build()
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResponseDto> getById(@PathVariable("id") Long id){
        return ResponseEntity.ok(
                ResponseDto.builder()
                        .body(productForResponseFinder.findById(id))
                        .code(HttpStatus.OK.value())
                        .message("Product founded!")
                        .build()
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ResponseDto> deleteById(@PathVariable("id") Long id) {
        productRemover.removeById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT)
                .body(ResponseDto.builder()
                        .code(HttpStatus.NO_CONTENT.value())
                        .message("Successfully removed")
                .build()
        );
    }

    @PutMapping("/{id}")
    public ResponseEntity<ResponseDto> updateById(@PathVariable("id") Long id,
                                                  @RequestBody ProductRequestDto requestDto){
        return ResponseEntity
                .status(HttpStatus.ACCEPTED)
                .body(
                        ResponseDto.builder()
                                .body(productUpdaterWithHistory.updateById(requestDto,id))
                                .code(HttpStatus.ACCEPTED.value())
                                .message("Product updated!")
                                .build()
                );
    }
}
