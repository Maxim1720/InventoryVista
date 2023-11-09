package ru.sasha.inventoryvista.dto.request;

import lombok.*;

import java.util.Date;

@Data
@AllArgsConstructor
@Builder(toBuilder = true)
@NoArgsConstructor
@EqualsAndHashCode
public class ProductRequestDto {
    private String name;
    private String description;
    private Long quantity;
    private Date expirationDate;
}
