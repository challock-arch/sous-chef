package com.example.sous_chef.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class IngredientsDTO {

    private String name;

    private int quantity;

    private String unit_of_measure;
}
