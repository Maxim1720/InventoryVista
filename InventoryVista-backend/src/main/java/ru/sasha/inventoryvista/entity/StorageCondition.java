package ru.sasha.inventoryvista.entity;


import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@EqualsAndHashCode
@Builder(toBuilder = true)
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "storage_conditions")
public class StorageCondition {
    @Id
    @GeneratedValue
    private Long id;
    @ManyToOne(cascade = CascadeType.MERGE)
    private Product product;
    private Float temperature;
    private Float lighting;
    private Float humidity;
    private String otherDetails;
}
