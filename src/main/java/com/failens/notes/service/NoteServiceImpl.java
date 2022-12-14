package com.failens.notes.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.failens.notes.dto.CategoryDto;
import com.failens.notes.dto.NoteDto;
import com.failens.notes.model.Category;
import com.failens.notes.model.Note;
import com.failens.notes.repository.INoteJpaRepository;

@Service
public class NoteServiceImpl implements INoteService {

    @Autowired
    private INoteJpaRepository noteRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public NoteDto save(NoteDto note) {
        Note noteEntity = modelMapper.map(note, Note.class);
        noteEntity = noteRepo.save(noteEntity);
        return modelMapper.map(noteEntity, NoteDto.class);
    }

    @Override
    public List<NoteDto> getAll() {
        List<Note> notesEntity = new ArrayList<>();
        notesEntity = noteRepo.findAll();
        List<NoteDto> notesDto = new ArrayList<>();
        for (Note noteEntity : notesEntity) {
            if (!noteEntity.isArchived()) {
                notesDto.add(modelMapper.map(noteEntity, NoteDto.class));
            }
        }
        return notesDto;
    }

    @Override
    public List<NoteDto> getAllArchived() {
        List<Note> notesEntity = new ArrayList<>();
        notesEntity = noteRepo.findAll();
        List<NoteDto> notesDto = new ArrayList<>();
        for (Note noteEntity : notesEntity) {
            if (noteEntity.isArchived()) {
                notesDto.add(modelMapper.map(noteEntity, NoteDto.class));
            }
        }
        return notesDto;
    }

    @Override
    public NoteDto get(Long id) {
        Optional<Note> noteEntity = noteRepo.findById(id);
        return modelMapper(noteEntity, NoteDto.class);
    }

    private NoteDto modelMapper(Optional<Note> noteEntity, Class<NoteDto> class1) {
        return modelMapper.map(noteEntity, class1);
    }

    @Override
    public void delete(Long id) {
        Optional<Note> noteEntity = noteRepo.findById(id);
        noteEntity.get().setDelete(true);
        noteRepo.save(noteEntity.get());
    }

    @Override
    public void archive(Long id) {
        Optional<Note> noteEntity = noteRepo.findById(id);
        noteEntity.get().setArchived(!noteEntity.get().isArchived());
        noteRepo.save(noteEntity.get());        
    }
}