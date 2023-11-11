package ru.sasha.inventoryvista.dto.response;

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
public class SupplyResponseDto implements Serializable {
    private Long id;
    private Long supplierId;
    private Long productId;
    private Integer quantity;
    private Date supplyDate;
}