package com.failens.notes.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.failens.notes.dto.NoteDto;
import com.failens.notes.service.INoteService;

@Controller
@RequestMapping("/notes")
public class NoteController {

    @Autowired
    INoteService noteService;

    @GetMapping("/get")
    public NoteDto showAll(){
        noteService
    }
    
}
