package com.flatfinder.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Listing {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String location;
    private String description;
    private int price;
    private int guests;
    private int beds;
    private int bedrooms;
    private int bathrooms;

    private String[] amenities;
    private String[] imageUrls;
}
