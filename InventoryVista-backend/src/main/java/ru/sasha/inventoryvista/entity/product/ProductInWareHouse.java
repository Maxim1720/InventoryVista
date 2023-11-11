package ru.sasha.inventoryvista.entity.product;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import lombok.*;

@Getter
@Setter
@Builder(toBuilder = true)
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class ProductInWareHouse {
    @EmbeddedId
    private ProductInWareHousePK id;
}
