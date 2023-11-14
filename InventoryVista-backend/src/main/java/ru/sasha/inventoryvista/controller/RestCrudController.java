package ru.sasha.inventoryvista.controller;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.sasha.inventoryvista.dto.ResponseDto;

@RestController
public interface RestCrudController<ReqBody> {

    @PostMapping
    ResponseEntity<ResponseDto> create(@RequestBody ReqBody reqBodyDto);

    @PutMapping
    ResponseEntity<ResponseDto> updateById(@PathVariable("id") Long id, @RequestBody ReqBody reqBodyDto);

    @GetMapping
    ResponseEntity<ResponseDto> all();

    @GetMapping
    ResponseEntity<ResponseDto> getById(@PathVariable("id") Long id);

    @DeleteMapping
    ResponseEntity<ResponseDto> deleteById(@PathVariable("id") Long id);
}
