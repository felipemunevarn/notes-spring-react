package com.failens.notes.model;

import java.util.Date;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
// import javax.persistence.JoinTable;
// import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Where;

@Entity
@Table(name = "note", schema = "public")
@Where(clause = "delete=false")
public class Note {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String content;

    @Column(columnDefinition = "boolean default false")
    private boolean delete;
    
    @Column(columnDefinition = "boolean default false")
    private boolean archived;

    private Date modified;

    @ManyToMany
    // @JoinTable(
    //     name = "note_category", 
    //     joinColumns = @JoinColumn(name = "note_id"), 
    //     inverseJoinColumns = @JoinColumn(name = "category_id"))
    private Set<Category> categories;

    public Note(){
    }

    public Note(String title, String content, Date modified, Set<Category> categories) {
        this.title = title;
        this.content = content;
        this.delete = false;
        this.archived = false;
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