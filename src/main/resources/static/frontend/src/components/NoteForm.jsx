import React, { useState } from "react";
import { saveNote, formatDate } from "../functions/funtions";

const NoteForm = props => {
    
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        const newNote = {
            'title':  title,
            'content': content,
            'modified': formatDate(new Date())
        }
        saveNote(newNote)
        e.preventDefault();
        props.onCancel()
        props.setNotes([...props.notes, newNote])
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
                            onChange={e => setTitle(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="">Content</label>
                            <textarea name="content" id="content" cols="30" rows="10"
                            onChange={e => setContent(e.target.value)}></textarea>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button onClick={props.onCancel}>Cancel</button>
                    <button onClick={handleSubmit}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default NoteForm;