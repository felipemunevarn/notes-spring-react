import React, { useState } from "react";
import { saveNote, formatDate, updateNote } from "../functions/funtions";

const NoteForm = props => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newNote = {
            'title':  props.title,
            'content': props.content,
            'modified': formatDate(new Date())
        }
        if (props.note) {
            let updatedNote = {...props.note, ...newNote}
            updateNote(props.note.id, updatedNote, (props.note.archived ? props.setArchivedNotes : props.setNotes))
        } else {
            saveNote(newNote, props.setNotes)
        }
        props.onCancel()
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
                    <form className="modal-form" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="">Title</label>
                            <input type="text" name="title" id="title" 
                                onChange={e => props.setTitle(e.target.value)} 
                                defaultValue={props.title}
                            />
                        </div>
                        <div>
                            <label htmlFor="">Content</label>
                            <textarea name="content" id="content" cols="30" rows="10"
                            onChange={e => props.setContent(e.target.value)} 
                            defaultValue={props.content}
                            >
                            </textarea>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button onClick={props.onCancel}>Cancel</button>
                    <button onClick={(e) => handleSubmit(e)}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default NoteForm;