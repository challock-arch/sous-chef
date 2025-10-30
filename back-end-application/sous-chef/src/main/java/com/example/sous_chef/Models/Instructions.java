package com.example.sous_chef.Models;


import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class Instructions extends IDAbstract {

    private int step_number;

    private String step_text;

    @ManyToOne
    @JsonManagedReference
    @JoinColumn(name = "recipe_id", nullable = false)
    private Recipes recipe;
}
