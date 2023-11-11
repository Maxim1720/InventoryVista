package ru.sasha.inventoryvista.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.sasha.inventoryvista.dto.ResponseDto;
import ru.sasha.inventoryvista.dto.request.SupplyRequestDto;
import ru.sasha.inventoryvista.service.crud.supply.SupplyCreator;
import ru.sasha.inventoryvista.service.crud.supply.SupplyFinder;

@RequestMapping("/supplies")
@RestController
public class SupplyRestController {

    private final SupplyCreator supplyCreator;
    private final SupplyFinder supplyFinder;
    public SupplyRestController(SupplyCreator supplyCreator, SupplyFinder supplyFinder) {
        this.supplyCreator = supplyCreator;
        this.supplyFinder = supplyFinder;
    }

    @PostMapping
    public ResponseEntity<ResponseDto> create(@RequestBody SupplyRequestDto dto){
        return ResponseEntity.ok(
                ResponseDto.builder()
                        .code(HttpStatus.OK.value())
                        .body(supplyCreator.create(dto))
                        .message("created!")
                        .build()
        );
    }

    @GetMapping
    public ResponseEntity<ResponseDto> all(){
        return ResponseEntity.ok(
                ResponseDto.builder()
                        .body(supplyFinder.findAll())
                        .message("founded!")
                        .code(HttpStatus.OK.value())
                        .build()
        );
    }

}
