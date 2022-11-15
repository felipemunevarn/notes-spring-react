package com.failens.notes.service;

import com.failens.notes.dto.NoteDto;

public interface INoteService {
    public NoteDto create(NoteDto note);
}