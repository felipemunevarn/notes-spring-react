package com.failens.notes.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.failens.notes.model.Note;

@Repository
public interface INoteJpaRepository extends JpaRepository<Note, Long> {
    
}