package com.example.sous_chef.Repositories;

import com.example.sous_chef.Models.Instructions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InstructionsRepository extends JpaRepository <Instructions, Integer> {
//    List<Instructions> findByRecipe_Id(Integer recipeId);
}
