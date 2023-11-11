package ru.sasha.inventoryvista.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.*;

@Getter
@Setter
@Builder(toBuilder = true)
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Supplier {
    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String contacts;

    /*Supplier_ID (Идентификатор поставщика, первичный ключ)
    Name (Имя поставщика)
    Contact_Details (Контактная информация)*/
}
