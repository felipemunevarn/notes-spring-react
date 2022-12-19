package com.failens.notes.service;

import java.util.List;

import com.failens.notes.dto.CategoryDto;

public interface ICategoryService {
    public CategoryDto save(CategoryDto category);
    public List<CategoryDto> getAll();
    public List<CategoryDto> getAllByNote(Long id);
    public CategoryDto get(Long id);
    public void delete(Long id);
    public List<CategoryDto> addCategory(Long noteId, List<CategoryDto> category);
}