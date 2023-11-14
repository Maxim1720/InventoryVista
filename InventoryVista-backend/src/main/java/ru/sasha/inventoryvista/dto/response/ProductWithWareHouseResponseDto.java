package ru.sasha.inventoryvista.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder(toBuilder = true)
@AllArgsConstructor
@NoArgsConstructor
@Data
public class ProductWithWareHouseResponseDto {

    @JsonProperty("product")
    private ProductResponseDto product;
    private Long wareHouseId;
}
