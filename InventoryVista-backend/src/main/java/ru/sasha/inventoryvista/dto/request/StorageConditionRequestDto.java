package ru.sasha.inventoryvista.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.sasha.inventoryvista.entity.Product;

@Data
@Builder(toBuilder = true)
@AllArgsConstructor
@NoArgsConstructor
public class StorageConditionRequestDto {
    private Long productId;
    private Float temperature;
    private Float lighting;
    private Float humidity;
    private String otherDetails;
}
