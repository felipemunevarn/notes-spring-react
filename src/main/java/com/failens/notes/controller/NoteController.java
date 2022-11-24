package com.failens.notes.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.failens.notes.dto.NoteDto;
import com.failens.notes.service.INoteService;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/notes")
public class NoteController {

    @Autowired
    INoteService noteService;

    @GetMapping("/get")
    public List<NoteDto> getAll(){
        return noteService.getAll();
    }

    @GetMapping("/get/{id}")
    public NoteDto getNote(@PathVariable("id") Long id){
        return noteService.get(id);
    }

    @PostMapping("/new")
    public NoteDto newNote(@RequestBody NoteDto note){
        return noteService.save(note);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteNote(@PathVariable("id") Long id) {
        noteService.delete(id);
    }

    @PutMapping("/update/{id}")
    public NoteDto updateNote(@RequestBody NoteDto note, @PathVariable("id") Long id){
        return noteService.save(note);
    }
}