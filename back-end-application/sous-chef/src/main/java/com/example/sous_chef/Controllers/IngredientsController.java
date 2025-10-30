package com.example.sous_chef.Controllers;

import com.example.sous_chef.Models.Ingredients;
import com.example.sous_chef.Repositories.IngredientsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/ingredients")
public class IngredientsController {

    @Autowired
    IngredientsRepository ingredientsRepository;

// TODO: Implement CRUD operations for Ingredients
    @GetMapping("")
    public String getIngredients() {
        List<Ingredients> allIngredients = ingredientsRepository.findAll();
        return allIngredients.toString();
    }

    @GetMapping("/{id}")
    public Ingredients getIngredientById(@PathVariable Integer id) {
        return ingredientsRepository.findById(id).orElse(null);
    }
}