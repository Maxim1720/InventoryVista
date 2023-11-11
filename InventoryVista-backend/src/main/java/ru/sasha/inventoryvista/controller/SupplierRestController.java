package ru.sasha.inventoryvista.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.sasha.inventoryvista.dto.ResponseDto;
import ru.sasha.inventoryvista.dto.request.SupplierRequestDto;
import ru.sasha.inventoryvista.service.crud.supplier.SupplierCreator;
import ru.sasha.inventoryvista.service.crud.supplier.SupplierFinder;

@RestController
@RequestMapping("/suppliers")
public class SupplierRestController {

    private final SupplierFinder finder;
    private final SupplierCreator creator;

    public SupplierRestController(SupplierFinder finder, SupplierCreator creator) {
        this.finder = finder;
        this.creator = creator;
    }


    @GetMapping
    public ResponseEntity<ResponseDto> all(){
        return ResponseEntity.ok(ResponseDto.builder()
                        .body(finder.findAll())
                        .message("founded")
                        .code(HttpStatus.OK.value())
                .build());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResponseDto> getById(@PathVariable("id") Long id){
        return ResponseEntity.ok(ResponseDto.builder()
                .body(finder.findById(id))
                .message("founded")
                .code(HttpStatus.OK.value())
                .build());
    }

    @GetMapping(params = "count")
    public ResponseEntity<ResponseDto> count(){
        return ResponseEntity.ok(ResponseDto.builder()
                .body((long) finder.findAll().size())
                .message("count")
                .code(HttpStatus.OK.value())
                .build());
    }

    @PostMapping
    public ResponseEntity<ResponseDto> create(@RequestBody SupplierRequestDto dto){
        return ResponseEntity.ok(ResponseDto.builder()
                .body(creator.create(dto))
                .message("CREATED!!!")
                .code(HttpStatus.OK.value())
                .build());
    }
}
