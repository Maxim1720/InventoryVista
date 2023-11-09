package ru.sasha.inventoryvista.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.sasha.inventoryvista.dto.ResponseDto;
import ru.sasha.inventoryvista.dto.request.WareHouseRequestDto;
import ru.sasha.inventoryvista.service.crud.warehouse.WareHouseCreator;
import ru.sasha.inventoryvista.service.crud.warehouse.WareHouseFinder;
import ru.sasha.inventoryvista.service.crud.warehouse.WareHouseRemover;

@RestController
@RequestMapping("/ware-houses")
public class WareHouseCrudRestController {


    private final WareHouseCreator wareHouseCreator;
    private final WareHouseFinder wareHouseFinder;

    private final WareHouseRemover wareHouseRemover;

    public WareHouseCrudRestController(WareHouseCreator wareHouseCreator, WareHouseFinder wareHouseFinder, WareHouseRemover wareHouseRemover) {
        this.wareHouseCreator = wareHouseCreator;
        this.wareHouseFinder = wareHouseFinder;
        this.wareHouseRemover = wareHouseRemover;
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
                        .body(wareHouseFinder.findAll())
                        .code(HttpStatus.OK.value())
                        .build()
        );
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<ResponseDto> getById(@PathVariable("id") Long id){
        return ResponseEntity.ok(
                ResponseDto.builder()
                        .body(wareHouseFinder.findById(id))
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
}
