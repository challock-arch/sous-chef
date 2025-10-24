package com.example.sous_chef.Repositories;

import com.example.sous_chef.Models.Ingredients;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IngredientsRepository extends JpaRepository <Ingredients, Integer> {
}
