package com.failens.notes;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class NoteConfiguration {

    @Bean
    public ModelMapper model(){
        return new ModelMapper();
    }    
}