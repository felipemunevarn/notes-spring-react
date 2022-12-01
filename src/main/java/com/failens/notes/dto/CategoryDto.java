package com.failens.notes.dto;

import java.util.Set;

import com.failens.notes.model.Note;

public class CategoryDto {
    
    private Long id;
    private String name;
    private Set<Note> notes;
    public CategoryDto() {
    }
    public CategoryDto(Long id, String name, Set<Note> notes) {
        this.id = id;
        this.name = name;
        this.notes = notes;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public Set<Note> getNotes() {
        return notes;
    }
    public void setNotes(Set<Note> notes) {
        this.notes = notes;
    }    
}