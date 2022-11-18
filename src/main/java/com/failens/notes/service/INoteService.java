package com.failens.notes.service;

import java.util.List;

import com.failens.notes.dto.NoteDto;

public interface INoteService {
    public NoteDto save(NoteDto note);
    public List<NoteDto> getAll();
    public NoteDto get(Long id);
}