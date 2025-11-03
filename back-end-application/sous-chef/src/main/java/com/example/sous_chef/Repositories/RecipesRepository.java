package com.example.sous_chef.Repositories;

import com.example.sous_chef.Models.Recipes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecipesRepository extends JpaRepository <Recipes, Integer> {
}
