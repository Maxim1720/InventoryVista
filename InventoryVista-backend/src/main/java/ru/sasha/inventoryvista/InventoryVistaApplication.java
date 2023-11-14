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

    private static long countLinesInFiles(String directoryPath, List<String> fileExtensions) {
        File directory = new File(directoryPath);

        if (!directory.exists() || !directory.isDirectory()) {
            throw new IllegalArgumentException("Invalid directory path: " + directoryPath);
        }

        long totalLines = 0;

        for (File file : directory.listFiles()) {
            if (file.isFile() && fileExtensions.stream().anyMatch(ext -> file.getName().endsWith(ext))) {
                try {
                    totalLines += Files.lines(file.toPath(), StandardCharsets.UTF_8).count();
                } catch (IOException e) {
                    System.err.println("Error reading file: " + file.getAbsolutePath());
                    e.printStackTrace();
                }
            } else if (file.isDirectory()) {
                totalLines += countLinesInFiles(file.getAbsolutePath(), fileExtensions);
            }
        }

        return totalLines;
    }

}

