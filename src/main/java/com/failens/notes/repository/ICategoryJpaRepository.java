package com.failens.notes.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.failens.notes.model.Category;

@Repository
public interface ICategoryJpaRepository extends JpaRepository<Category, Long> {
    
}