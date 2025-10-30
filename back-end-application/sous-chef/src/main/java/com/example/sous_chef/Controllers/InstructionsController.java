package com.example.sous_chef.Controllers;


import com.example.sous_chef.Models.Instructions;
import com.example.sous_chef.Repositories.InstructionsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/instructions")
public class InstructionsController {

    @Autowired
    private InstructionsRepository instructionsRepository;

    @GetMapping("")
    public List<Instructions> getAllInstructions() {
        return instructionsRepository.findAll();
    }

    @GetMapping("/{id}")
    public Instructions getInstructionById(@PathVariable Integer id) {
        return instructionsRepository.findById(id).orElse(null);
    }
}
