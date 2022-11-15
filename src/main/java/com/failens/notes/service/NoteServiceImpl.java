package com.failens.notes.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.failens.notes.dto.NoteDto;
import com.failens.notes.model.Note;
import com.failens.notes.repository.INoteJpaRepository;

@Service
public class NoteServiceImpl implements INoteService {

    @Autowired
    private INoteJpaRepository noteRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public NoteDto create(NoteDto note) {
        Note noteEntity = modelMapper.map(note, Note.class);
        noteEntity = noteRepo.save(noteEntity);
        return modelMapper.map(noteEntity, NoteDto.class);
    }    
}