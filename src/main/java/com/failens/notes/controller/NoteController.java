package com.failens.notes.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.failens.notes.dto.NoteDto;
import com.failens.notes.service.INoteService;

@Controller
@RequestMapping("/notes")
public class NoteController {

    @Autowired
    INoteService noteService;

    @GetMapping("/get")
    public List<NoteDto> getAll(){
        System.out.println(noteService.getAll());
        return noteService.getAll();
    }

    @GetMapping("/get/{id}")
    public NoteDto getNote(@PathVariable("id") Long id){
        return noteService.get(id);
    }

    // @PostMapping("/new")
    // public NoteDto newNote(@RequestBody NoteDto note){
    //     return noteService.save(note);
    // }
}