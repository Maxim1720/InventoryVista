package ru.sasha.inventoryvista.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder(toBuilder = true)
public class UserRegistrationRequestDto {
    @NotNull
    private String email;
    @NotNull
    private String password;
    @NotNull
    private String firstname;
    @NotNull
    private String lastname;

    private String secondName;
}
