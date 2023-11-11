package ru.sasha.inventoryvista.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.sasha.inventoryvista.dto.ResponseDto;
import ru.sasha.inventoryvista.service.crud.expiration.history.ExpirationHistoryFinder;

@RestController
@RequestMapping("/products/{id}/history")
public class ExpirationHistoryRestController {
    private final ExpirationHistoryFinder finder;

    public ExpirationHistoryRestController(ExpirationHistoryFinder finder) {
        this.finder = finder;
    }

    @GetMapping
    public ResponseEntity<ResponseDto> getByProductId(@PathVariable("id") Long id){
        return ResponseEntity.ok(ResponseDto.builder()
                        .body(finder.findByProductId(id))
                        .message("founded!!")
                        .code(HttpStatus.OK.value())
                .build());
    }

}
