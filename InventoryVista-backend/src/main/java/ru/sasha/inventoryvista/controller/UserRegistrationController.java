package ru.sasha.inventoryvista.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.sasha.inventoryvista.dto.request.UserRegistrationRequestDto;
import ru.sasha.inventoryvista.service.RegistrationService;

@RestController
@RequestMapping("/registration")
public class UserRegistrationController {

    private final RegistrationService registrationService;

    public UserRegistrationController(RegistrationService registrationService) {
        this.registrationService = registrationService;
    }

    @PostMapping
    public ResponseEntity<?> register(@RequestBody UserRegistrationRequestDto dto){
        registrationService.register(dto);
        return ResponseEntity.ok().build();
    }

}
