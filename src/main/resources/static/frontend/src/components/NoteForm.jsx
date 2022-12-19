import React, { useState, useEffect } from "react";
import { saveNote, updateNote, formatDate } from "../functions/funtions";
import { saveCategory, allCategories, addCategory } from "../functions/categoryFunctions";
import Category from "./Category";

const NoteForm = props => {
    
    const [categoryName, setCategoryName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // for (const newCategory of props.categories) {
        //     saveCategory(newCategory, props.setCategories)
        // }
        const newNote = {
            'title':  props.title,
            'content': props.content,
            'modified': formatDate(new Date()),
            // 'categories': props.categories
        }
        if (props.note) {
            let updatedNote = {...props.note, ...newNote}
            updateNote(props.note.id, updatedNote, (props.note.archived ? props.setArchivedNotes : props.setNotes))
            addCategory(props.note.id, props.categories, props.setCategories)
        } else {
            saveNote(newNote, props.setNotes)
            addCategory(props.notes[props.notes.length - 1].id, props.categories, props.setCategories)
        }
        props.onCancel()
    }
    
    const handleAdd = (e) => {
        let newCategory = {
            'name': categoryName
        }
        props.setCategories([...props.categories, newCategory])
        e.preventDefault()
    }

    const handleDelete = (e, name) => {
        props.setCategories(props.categories.filter(category => category.name !== name))        
        e.preventDefault()
    }
    
    if (!props.show){
        return null;
    }

    return (
        <div className="modal" onClick={props.onCancel}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h1 className="modal-title">Create / Edit note</h1>
                </div>
                <div className="modal-body">
                    <form className="modal-form"
                        onKeyDown={e => {if (e.key === "Escape") {props.onCancel()}}} 
                    >
                        <div className="modal-fields">
                            <label className="modal-lbl" htmlFor="">Title</label>
                            <input className="modal-input-box"
                                type="text" name="title" id="title" 
                                onChange={e => props.setTitle(e.target.value)} 
                                defaultValue={props.title}
                                autoFocus
                                placeholder="Title of the note"
                            />
                        </div>
                        <div className="modal-fields">
                            <label className="modal-lbl" htmlFor="">Content</label>
                            <textarea className="modal-input-box"
                                name="content" id="content" cols="30" rows="10"
                                onChange={e => props.setContent(e.target.value)} 
                                defaultValue={props.content}
                                placeholder="Content of the note"
                            >
                            </textarea>
                        </div>
                        <div className="modal-fields">
                            <label className="modal-lbl" htmlFor="">Categories</label>
                            <div className="modal-categories-box">
                                {props.categories.map(category => 
                                    <Category name={category.name}
                                    onDelete={handleDelete}/>)}
                            </div>
                        </div>
                        <div className="modal-fields">
                            <label className="modal-lbl" htmlFor="">Category</label>
                            <input className="modal-input-box"
                                type="text" name="category" id="category" 
                                onChange={e => setCategoryName(e.target.value)}
                                placeholder="Name of the category"
                            />
                            <button className="modal-button" 
                                onClick={e => handleAdd(e)}
                            >
                                Add
                            </button>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button className="modal-button" onClick={props.onCancel}>Cancel</button>
                    <button className="modal-button" onClick={(e) => handleSubmit(e)}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default NoteForm;