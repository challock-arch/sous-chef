package com.example.sous_chef.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class RecipeDTO {

    private String recipe_name;

    private int calories;

    private int servings;

    private int prep_time_minutes;

    private int cook_time_minutes;

    private List<IngredientsDTO> ingredients;

    private List<InstructionsDTO> instructions;
}
