package ru.sasha.inventoryvista.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.sasha.inventoryvista.dto.ResponseDto;
import ru.sasha.inventoryvista.dto.request.SupplierRequestDto;
import ru.sasha.inventoryvista.dto.response.SupplierResponseDto;
import ru.sasha.inventoryvista.service.crud.Updater;
import ru.sasha.inventoryvista.service.crud.supplier.SupplierCreator;
import ru.sasha.inventoryvista.service.crud.supplier.SupplierFinder;
import ru.sasha.inventoryvista.service.crud.supplier.SupplierRemover;

@RestController
@RequestMapping("/suppliers")
public class SupplierRestController implements RestCrudController<SupplierRequestDto>{

    private final SupplierFinder supplierFinder;
    private final SupplierCreator creator;
    private final Updater<SupplierRequestDto, SupplierResponseDto> updater;

    private final SupplierRemover supplierRemover;

    public SupplierRestController(SupplierFinder supplierFinder, SupplierCreator creator, Updater<SupplierRequestDto, SupplierResponseDto> updater, SupplierRemover supplierRemover) {
        this.supplierFinder = supplierFinder;
        this.creator = creator;
        this.updater = updater;
        this.supplierRemover = supplierRemover;
    }


    @GetMapping
    public ResponseEntity<ResponseDto> all(){
        return ResponseEntity.ok(ResponseDto.builder()
                        .body(supplierFinder.findAll())
                        .message("founded")
                        .code(HttpStatus.OK.value())
                .build());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResponseDto> getById(@PathVariable("id") Long id){
        return ResponseEntity.ok(ResponseDto.builder()
                .body(supplierFinder.findById(id))
                .message("founded")
                .code(HttpStatus.OK.value())
                .build());
    }

    @GetMapping(params = "count")
    public ResponseEntity<ResponseDto> count(){
        return ResponseEntity.ok(ResponseDto.builder()
                .body((long) supplierFinder.findAll().size())
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

    @PutMapping("/{id}")
    public ResponseEntity<ResponseDto> updateById(@PathVariable("id") Long id, @RequestBody SupplierRequestDto dto){
        return ResponseEntity.ok(ResponseDto.builder()
                        .body(updater.updateById(dto,id))
                        .code(HttpStatus.OK.value())
                        .message("updated!")
                .build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ResponseDto> deleteById(@PathVariable("id") Long id){
        supplierRemover.removeById(id);
        return ResponseEntity.ok(ResponseDto.builder()
                        .message("removed")
                .code(HttpStatus.NO_CONTENT.value())
                .build());
    }
}
