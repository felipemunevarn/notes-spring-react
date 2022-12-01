package com.failens.notes.dto;

import java.util.Date;
import java.util.Set;

import com.failens.notes.model.Category;

public class NoteDto {
    
    private Long id;
    private String title;
    private String content;
    private boolean delete;
    private boolean archived;
    private Date modified;
    private Set<Category> categories;

    public NoteDto() {
    }

    public NoteDto(String title, String content, boolean delete, boolean archived, Date modified, Set<Category> categories) {
        this.title = title;
        this.content = content;
        this.delete = delete;
        this.archived = archived;
        this.modified = modified;
        this.categories = categories;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public boolean isDelete() {
        return delete;
    }

    public void setDelete(boolean delete) {
        this.delete = delete;
    }

    public boolean isArchived() {
        return archived;
    }

    public void setArchived(boolean archived) {
        this.archived = archived;
    }

    public Date getModified() {
        return modified;
    }

    public void setModified(Date modified) {
        this.modified = modified;
    }

    public Set<Category> getCategories() {
        return categories;
    }

    public void setCategories(Set<Category> categories) {
        this.categories = categories;
    }
}