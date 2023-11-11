package ru.sasha.inventoryvista.dto.request;

import lombok.*;

import java.io.Serializable;
import java.util.Date;

/**
 * DTO for {@link ru.sasha.inventoryvista.entity.Supply}
 */
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class SupplyRequestDto implements Serializable {
    private Long supplierId;
    private Long productId;
    private Integer quantity;
    private Date supplyDate;
}