package ru.sasha.inventoryvista.dto.request.product;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.sasha.inventoryvista.dto.request.ProductRequestDto;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder(toBuilder = true)
public class ProductWithWareHouseRequestDto {

    @JsonProperty("product")
    private ProductRequestDto product;
    private Long wareHouseId;
}
