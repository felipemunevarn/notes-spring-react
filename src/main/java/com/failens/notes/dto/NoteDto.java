package com.failens.notes.dto;

import java.util.Date;

public class NoteDto {
    
    private Long id;
    private String title;
    private String content;
    private boolean delete;
    private boolean archived;
    private Date modified;

    public NoteDto(String title, String content, boolean delete, boolean archived, Date modified) {
        this.title = title;
        this.content = content;
        this.delete = delete;
        this.archived = archived;
        this.modified = modified;
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
}