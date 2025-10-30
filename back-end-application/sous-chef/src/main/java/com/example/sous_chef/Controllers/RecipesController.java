package com.example.sous_chef.Controllers;

import com.example.sous_chef.DTO.IngredientsDTO;
import com.example.sous_chef.DTO.InstructionsDTO;
import com.example.sous_chef.DTO.RecipeDTO;
import com.example.sous_chef.Models.Ingredients;
import com.example.sous_chef.Models.Instructions;
import com.example.sous_chef.Models.Recipes;
import com.example.sous_chef.Repositories.IngredientsRepository;
import com.example.sous_chef.Repositories.InstructionsRepository;
import com.example.sous_chef.Repositories.RecipesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.LongStream;

@RestController
@RequestMapping("/recipes")
public class RecipesController {

    @Autowired
    private RecipesRepository recipesRepository;

    @Autowired
    private IngredientsRepository ingredientsRepository;

    @Autowired
    private InstructionsRepository instructionsRepository;

    @GetMapping("")
    public List<Recipes> getAllRecipes() {
        return recipesRepository.findAll();
    }

    @GetMapping("/{id}")
    public Recipes getRecipeById(@PathVariable Integer id) {
        return recipesRepository.findById(id).orElse(null);
    }

    @PostMapping("")
    public Recipes createRecipe(@RequestBody RecipeDTO recipeData) {
        Recipes recipe = new Recipes();

        recipe.setRecipe_name(recipeData.getRecipe_name());
        recipe.setCalories(recipeData.getCalories());
        recipe.setServings(recipeData.getServings());
        recipe.setPrep_time_minutes(recipeData.getPrep_time_minutes());
        recipe.setCook_time_minutes(recipeData.getCook_time_minutes());
        Recipes saved = recipesRepository.save(recipe);


        if(recipeData.getIngredients() != null) {
            List<Ingredients> ingredients = new ArrayList<>();
            for (IngredientsDTO ingredientDTO : recipeData.getIngredients()) {
                Ingredients ingredient = new Ingredients();
                ingredient.setName(ingredientDTO.getName());
                ingredient.setQuantity(ingredientDTO.getQuantity());
                ingredient.setUnit_of_measure(ingredientDTO.getUnit_of_measure());
                ingredient.setRecipe(recipe);
                ingredients.add(ingredientsRepository.save(ingredient));
            }
        }

        if(recipeData.getInstructions() != null) {
            List<Instructions> instructions = new ArrayList<>();
            for (InstructionsDTO instructionDTO : recipeData.getInstructions()) {
                Instructions instruction = new Instructions();
                instruction.setStep_text(instructionDTO.getStep_text());
                instruction.setStep_number(instructionDTO.getStep_number());
                instruction.setRecipe(recipe);
                instructions.add(instructionsRepository.save(instruction));
            }
        }
        return recipesRepository.findById(saved.getId()).orElse(null);
    };

    @PutMapping("/{id}")
    public Recipes updateRecipe(@PathVariable Integer id, @RequestBody Recipes recipeDetails) {
        Recipes recipe = recipesRepository.findById(id).orElse(null);
        if (recipe != null) {
            recipe.setRecipe_name(recipeDetails.getRecipe_name());
            recipe.setCalories(recipeDetails.getCalories());
            recipe.setServings(recipeDetails.getServings());
            recipe.setPrep_time_minutes(recipeDetails.getPrep_time_minutes());
            recipe.setCook_time_minutes(recipeDetails.getCook_time_minutes());
            return recipesRepository.save(recipe);
        } else {
            return null;
        }
    };

    @DeleteMapping("/{id}")
    public void deleteRecipe(@PathVariable Integer id) {
        recipesRepository.deleteById(id);
    };
}
