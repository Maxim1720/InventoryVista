package ru.sasha.inventoryvista.dto.response;

import jakarta.persistence.CascadeType;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import ru.sasha.inventoryvista.entity.Product;

@Data
@AllArgsConstructor
@Builder(toBuilder = true)
public class StorageConditionResponseDto {
    private Long id;
    private Long productId;
    private Float temperature;
    private Float lighting;
    private Float humidity;
    private String otherDetails;
}
