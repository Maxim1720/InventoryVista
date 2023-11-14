package ru.sasha.inventoryvista.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.sasha.inventoryvista.dto.ResponseDto;
import ru.sasha.inventoryvista.dto.request.SupplyRequestDto;
import ru.sasha.inventoryvista.service.crud.supply.SupplyCreator;
import ru.sasha.inventoryvista.service.crud.supply.SupplyRemover;
import ru.sasha.inventoryvista.service.crud.supply.SupplyResponseFinder;
import ru.sasha.inventoryvista.service.crud.supply.SupplyUpdater;

@RequestMapping("/supplies")
@RestController
public class SupplyRestController implements RestCrudController<SupplyRequestDto>{

    private final SupplyCreator supplyCreator;
    private final SupplyResponseFinder supplyResponseFinder;

    private final SupplyUpdater supplyUpdater;

    private final SupplyRemover supplyRemover;
    public SupplyRestController(SupplyCreator supplyCreator,
                                SupplyResponseFinder supplyResponseFinder,
                                SupplyUpdater supplyUpdater,
                                SupplyRemover supplyRemover) {
        this.supplyCreator = supplyCreator;
        this.supplyResponseFinder = supplyResponseFinder;
        this.supplyUpdater = supplyUpdater;
        this.supplyRemover = supplyRemover;
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
                        .body(supplyResponseFinder.findAll())
                        .message("founded!")
                        .code(HttpStatus.OK.value())
                        .build()
        );
    }


    @GetMapping("/{id}")
    public ResponseEntity<ResponseDto> getById(@PathVariable("id") Long id){
        return ResponseEntity.ok(
                ResponseDto.builder()
                        .code(HttpStatus.OK.value())
                        .message("Founded!")
                        .body(supplyResponseFinder.findById(id))
                        .build()
        );
    }

    @Override
    @DeleteMapping("/{id}")
    public ResponseEntity<ResponseDto> deleteById(@PathVariable("id") Long id) {
        supplyRemover.removeById(id);
        return ResponseEntity.ok(ResponseDto.builder()
                        .code(HttpStatus.NO_CONTENT.value())
                        .message("Supply Deleted")
                .build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<ResponseDto> updateById(@PathVariable("id") Long id, @RequestBody SupplyRequestDto supplyRequestDto) {
        return ResponseEntity.ok(ResponseDto.builder()
                .body(supplyUpdater.updateById(supplyRequestDto, id))
                .message("UPDATED!!!")
                .code(HttpStatus.OK.value())
                .build());
    }
}
