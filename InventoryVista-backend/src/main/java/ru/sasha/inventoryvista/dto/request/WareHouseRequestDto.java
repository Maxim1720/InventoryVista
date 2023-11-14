package ru.sasha.inventoryvista.dto.request;

import lombok.*;

@EqualsAndHashCode
@Builder(toBuilder = true)
@AllArgsConstructor
@NoArgsConstructor
@Data
public class WareHouseRequestDto {
    private String name;
    private String location;
}
