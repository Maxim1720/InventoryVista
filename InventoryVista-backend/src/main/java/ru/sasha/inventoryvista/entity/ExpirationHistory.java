package ru.sasha.inventoryvista.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

@Builder(toBuilder = true)
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
public class ExpirationHistory {

    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    private Product product;

    @Column(nullable = false)
    @Temporal(TemporalType.DATE)
    private Date oldDate;

    @Column(nullable = false)
    @Temporal(TemporalType.DATE)
    private Date newDate;

    @Column(nullable = false)
    @CreationTimestamp
    private Date createdAt;
}
