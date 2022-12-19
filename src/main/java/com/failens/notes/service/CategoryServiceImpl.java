package com.failens.notes.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.failens.notes.dto.CategoryDto;
import com.failens.notes.model.Category;
import com.failens.notes.model.Note;
import com.failens.notes.repository.ICategoryJpaRepository;
import com.failens.notes.repository.INoteJpaRepository;

@Service
public class CategoryServiceImpl implements ICategoryService {

    @Autowired
    private ICategoryJpaRepository categoryRepo;
    
    @Autowired
    private INoteJpaRepository noteRepo;

    @Autowired
    private ModelMapper modelMapper;
    
    @Override
    public CategoryDto save(CategoryDto category) {
        Category categoryEntity = modelMapper.map(category, Category.class);
        categoryEntity = categoryRepo.save(categoryEntity);
        return modelMapper.map(categoryEntity, CategoryDto.class);
    }

    @Override
    public List<CategoryDto> getAll() {
        List<Category> categoriesEntity = new ArrayList<>();
        categoriesEntity = categoryRepo.findAll();
        List<CategoryDto> categoriesDto = new ArrayList<>();
        for (Category categoryEntity : categoriesEntity) {
            categoriesDto.add(modelMapper.map(categoryEntity, CategoryDto.class));
        }
        return categoriesDto;
    }
    
    @Override
    public List<CategoryDto> getAllByNote(Long id) {
        List<Category> categoriesEntity = categoryRepo.findCategoriesByNotes(id);
        List<CategoryDto> categoriesDto = new ArrayList<>();
        for (Category categoryEntity : categoriesEntity) {
            categoriesDto.add(modelMapper.map(categoryEntity, CategoryDto.class));
        }
        return categoriesDto;
    }

    @Override
    public CategoryDto get(Long id) {
        Optional<Category> categoryEntity = categoryRepo.findById(id);
        return modelMapper(categoryEntity, CategoryDto.class);
    }

    private CategoryDto modelMapper(Optional<Category> categoryEntity, Class<CategoryDto> class1) {
        return modelMapper(categoryEntity, class1);
    }
    
    private Category modelMapperInverse(CategoryDto categoryDto, Class<Category> class1) {
        return modelMapperInverse(categoryDto, class1);
    }

    @Override
    public void delete(Long id) {
        categoryRepo.deleteById(id);
    }

    @Override
    public List<CategoryDto> addCategory(Long noteId, List<CategoryDto> categoryRequest) {
        List<CategoryDto> categoriesDto = new ArrayList<>();
        for (CategoryDto categoryDto : categoryRequest) {
            long categoryId = categoryRepo.findByName(categoryDto.getName()).getId();

            // if category do not exists
            if (categoryId < 0) {
                categoryRepo.save(modelMapperInverse(categoryDto, Category.class));
            }

            // when category was saved
            categoryId = categoryRepo.findByName(categoryDto.getName()).getId();
            Optional<Note> note = noteRepo.findById(noteId);
            Optional<Category> category = categoryRepo.findById(categoryId);
            note.get().addCategory(category.get());
            System.out.println(note.get());
            noteRepo.save(note.get());
            categoriesDto.add(modelMapper(category, CategoryDto.class));
        }
        return categoriesDto;
    }
}