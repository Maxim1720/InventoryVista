package ru.sasha.inventoryvista.dto.response;

import lombok.Data;

import java.util.Date;

@Data
public class ProductResponseDto {
    private Long id;
    private String name;
    private String description;
    private Long quantity;
    private Date expirationDate;
}

