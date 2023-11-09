package ru.sasha.inventoryvista.exception;

import jakarta.persistence.EntityExistsException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import ru.sasha.inventoryvista.dto.ResponseDto;

import java.util.NoSuchElementException;

@RestControllerAdvice
public class CrudExceptionHandler {
    @ExceptionHandler(NoSuchElementException.class)
    public ResponseEntity<ResponseDto> handleNoValuePresent(NoSuchElementException e){
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                ResponseDto.builder()
                        .code(HttpStatus.NOT_FOUND.value())
                        .message("Value not found: " + e.getMessage())
                        .build()
                );
    }

    @ExceptionHandler(EntityExistsException.class)
    public ResponseEntity<ResponseDto> handleExistsException(EntityExistsException e){
        return ResponseEntity.status(HttpStatus.CONFLICT).body(
                ResponseDto.builder()
                        .code(HttpStatus.CONFLICT.value())
                        .message("Value exists: " + e.getMessage())
                        .build()
        );
    }
}
