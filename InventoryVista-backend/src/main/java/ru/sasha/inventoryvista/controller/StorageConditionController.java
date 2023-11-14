package ru.sasha.inventoryvista.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.sasha.inventoryvista.dto.ResponseDto;
import ru.sasha.inventoryvista.dto.request.StorageConditionRequestDto;
import ru.sasha.inventoryvista.mapper.StorageConditionMapper;
import ru.sasha.inventoryvista.service.crud.storagecondition.StorageConditionCreator;
import ru.sasha.inventoryvista.service.crud.storagecondition.StorageConditionFinder;
import ru.sasha.inventoryvista.service.crud.storagecondition.StorageConditionUpdater;

@RestController
@RequestMapping("/products/{id}/storage-condition")
public class StorageConditionController {

    private final StorageConditionCreator storageConditionCreator;

    private final StorageConditionMapper storageConditionMapper;

    private final StorageConditionFinder storageConditionFinder;

    private final StorageConditionUpdater storageConditionUpdater;
    public StorageConditionController(StorageConditionCreator storageConditionCreator,
                                      StorageConditionMapper storageConditionMapper,
                                      StorageConditionFinder storageConditionFinder, StorageConditionUpdater storageConditionUpdater) {
        this.storageConditionCreator = storageConditionCreator;
        this.storageConditionMapper = storageConditionMapper;
        this.storageConditionFinder = storageConditionFinder;
        this.storageConditionUpdater = storageConditionUpdater;
    }


    @PostMapping
    public ResponseEntity<ResponseDto> create(@RequestBody StorageConditionRequestDto storageCondition,
                                                   @PathVariable("id") Long productId) {
        storageCondition.setProductId(productId);
        StorageConditionRequestDto sc =storageCondition;
        return ResponseEntity.ok(
                ResponseDto.builder()
                        .body(storageConditionCreator.create(sc))
                        .message("Has been created!")
                        .code(HttpStatus.OK.value())
                        .build()
        );
    }

    @GetMapping
    public ResponseEntity<ResponseDto> get(@PathVariable("id") Long id){
        return ResponseEntity.ok(
                ResponseDto.builder()
                        .body(storageConditionMapper.toResponse(storageConditionFinder.findByProductId(id)))
                        .code(HttpStatus.OK.value())
                        .build()
        );
    }

    @PutMapping
    public ResponseEntity<ResponseDto> updateById(@PathVariable("id") Long productId,
                                                  @RequestBody StorageConditionRequestDto dto) {
        return ResponseEntity.ok(
                ResponseDto.builder()
                        .body(storageConditionUpdater.updateById(dto, productId))
                        .code(HttpStatus.OK.value())
                        .build()
        );
    }




}
