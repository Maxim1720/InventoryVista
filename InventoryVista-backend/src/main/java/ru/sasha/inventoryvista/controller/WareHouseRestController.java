package ru.sasha.inventoryvista.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.sasha.inventoryvista.dto.ResponseDto;
import ru.sasha.inventoryvista.dto.request.WareHouseRequestDto;
import ru.sasha.inventoryvista.dto.response.WareHouseResponseDto;
import ru.sasha.inventoryvista.service.crud.Updater;
import ru.sasha.inventoryvista.service.crud.warehouse.WareHouseCreator;
import ru.sasha.inventoryvista.service.crud.warehouse.WareHouseResponseDtoFinder;
import ru.sasha.inventoryvista.service.crud.warehouse.WareHouseRemover;

@RestController
@RequestMapping("/ware-houses")
public class WareHouseRestController {


    private final WareHouseCreator wareHouseCreator;
    private final WareHouseResponseDtoFinder wareHouseResponseDtoFinder;

    private final WareHouseRemover wareHouseRemover;

    private final Updater<WareHouseRequestDto, WareHouseResponseDto> updater;

    public WareHouseRestController(WareHouseCreator wareHouseCreator,
                                   WareHouseResponseDtoFinder wareHouseResponseDtoFinder,
                                   WareHouseRemover wareHouseRemover,
                                   Updater<WareHouseRequestDto, WareHouseResponseDto> updater) {
        this.wareHouseCreator = wareHouseCreator;
        this.wareHouseResponseDtoFinder = wareHouseResponseDtoFinder;
        this.wareHouseRemover = wareHouseRemover;
        this.updater = updater;
    }

    @PostMapping
    public ResponseEntity<ResponseDto> create(@RequestBody WareHouseRequestDto wareHouseRequestDto){
        return ResponseEntity.ok(
                ResponseDto.builder()
                        .body(wareHouseCreator.create(wareHouseRequestDto))
                        .code(HttpStatus.OK.value())
                        .build()
        );
    }

    @GetMapping
    public ResponseEntity<ResponseDto> all(){
        return ResponseEntity.ok(
                ResponseDto.builder()
                        .body(wareHouseResponseDtoFinder.findAll())
                        .code(HttpStatus.OK.value())
                        .build()
        );
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<ResponseDto> getById(@PathVariable("id") Long id){
        return ResponseEntity.ok(
                ResponseDto.builder()
                        .body(wareHouseResponseDtoFinder.findById(id))
                        .code(HttpStatus.OK.value())
                        .build()
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ResponseDto> deleteById(@PathVariable("id") Long id){
        wareHouseRemover.removeById(id);
        return ResponseEntity.ok(
                ResponseDto.builder().message(
                        "Successfully removed!!!"
                ).build()
        );
    }

    @PutMapping("/{id}")
    public ResponseEntity<ResponseDto> updateById(@PathVariable("id") Long id, @RequestBody WareHouseRequestDto dto){
        return ResponseEntity.ok(
                ResponseDto.builder()
                        .code(HttpStatus.OK.value())
                        .body(updater.updateById(dto, id))
                        .message("updated!")
                        .build()
        );
    }
}
