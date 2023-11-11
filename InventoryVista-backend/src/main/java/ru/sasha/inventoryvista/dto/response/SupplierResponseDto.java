package ru.sasha.inventoryvista.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.sasha.inventoryvista.entity.Supplier;

import java.io.Serializable;

/**
 * DTO for {@link Supplier}
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class SupplierResponseDto implements Serializable {
    private Long id;
    private String name;
    private String contacts;
}