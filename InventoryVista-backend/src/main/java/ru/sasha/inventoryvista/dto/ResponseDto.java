package ru.sasha.inventoryvista.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder(toBuilder = true)
public class ResponseDto {
    private String message;
    private Integer code;
    private Object body;
}
