package ru.sasha.inventoryvista;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.util.List;

@SpringBootApplication
public class InventoryVistaApplication {
    public static void main(String[] args) {
        SpringApplication.run(InventoryVistaApplication.class, args);
    }

}

