package com.example.sous_chef.Models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Ingredients extends IDAbstract {

    private String name;

    private int quantity;

    private String unit_of_measure;

    @ManyToOne
    @JsonManagedReference
    @JoinColumn(name = "recipe_id", nullable = false)
    private Recipes recipe;
}
