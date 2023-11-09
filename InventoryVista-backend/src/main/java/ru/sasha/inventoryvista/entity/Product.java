package ru.sasha.inventoryvista.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder(toBuilder = true)
@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String description;
    private Long quantity;
    private Date expirationDate;

    @OneToOne(cascade = CascadeType.ALL)
    private StorageCondition storageCondition;
}
