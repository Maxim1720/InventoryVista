package ru.sasha.inventoryvista.entity.product;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Builder(toBuilder = true)
@Data
@Embeddable
public class ProductInWareHousePK implements Serializable {
    private Long productId;
    private Long wareHouseId;
}
