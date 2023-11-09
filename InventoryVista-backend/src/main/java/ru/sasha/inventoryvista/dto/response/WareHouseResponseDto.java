package ru.sasha.inventoryvista.dto.response;

import lombok.*;

@Data
@EqualsAndHashCode
@Builder(toBuilder = true)
@AllArgsConstructor
@NoArgsConstructor
public class WareHouseResponseDto {
    private Long id;
    private String location;
}
