package com.example.sous_chef.Models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class Recipes extends IDAbstract {

    private String recipe_name;

    private int calories;

    private int servings;

    private int prep_time_minutes;

    private int cook_time_minutes;

    @OneToMany(mappedBy = "recipe")
    @JsonBackReference
    private final List<Ingredients> ingredients = new ArrayList<>();

    @OneToMany(mappedBy = "recipe")
    @JsonBackReference
    private final List<Instructions> instructions = new ArrayList<>();
}
