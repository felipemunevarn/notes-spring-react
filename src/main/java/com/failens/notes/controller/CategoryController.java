package com.failens.notes.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.failens.notes.dto.CategoryDto;
import com.failens.notes.service.ICategoryService;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/categories")
public class CategoryController {

    @Autowired
    ICategoryService categoryService;

    @GetMapping("/get")
    public List<CategoryDto> getAll(){
        return categoryService.getAll();
    }

    @GetMapping("/get/{id}")
    public CategoryDto getCategory(@PathVariable("id") Long id){
        return categoryService.get(id);
    }

    @PostMapping("/new")
    public CategoryDto newCategory(@RequestBody CategoryDto category){
        return categoryService.save(category);
    }

    @PutMapping("/delete/{id}")
    public void deleteCategory(@PathVariable("id") Long id) {
        categoryService.delete(id);
    }
}