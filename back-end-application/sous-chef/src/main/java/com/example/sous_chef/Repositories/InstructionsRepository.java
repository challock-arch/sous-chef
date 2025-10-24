package com.example.sous_chef.Repositories;

import com.example.sous_chef.Models.Instructions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InstructionsRepository extends JpaRepository <Instructions, Integer> {
}
