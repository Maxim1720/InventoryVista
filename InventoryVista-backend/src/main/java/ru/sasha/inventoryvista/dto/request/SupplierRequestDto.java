package ru.sasha.inventoryvista.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

/**
 * DTO for {@link ru.sasha.inventoryvista.entity.Supplier}
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class SupplierRequestDto implements Serializable {
    @NotBlank(message = "Name is empty")
    private String name;
    @NotBlank(message = "Contacts is empty")
    private String contacts;
}