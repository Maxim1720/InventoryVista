package ru.sasha.inventoryvista.dto.response;

import lombok.*;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder(toBuilder = true)
@EqualsAndHashCode
public class ExpirationHistoryResponseDto {
    private Long id;
    private Long productId;
    private Date oldDate;
    private Date newDate;
    private Date createdAt;
}
