import React, { useState } from "react";
import { saveNote } from "../functions/funtions";

const NoteForm = props => {
    
    if (!props.show){
        return null;
    }

    // const [body, setBody] = useState({});

    const onCancel = () => {
        const newNote = {
            'title':  document.getElementById('title').value,
            'content': document.getElementById('content').value,
            'modified': new Date().toLocaleDateString().replace("/", "-").replace("/", "-")
        }
        console.log(newNote);
        props.setBody(newNote)
        saveNote(props.body)
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title">Create / Edit note</h1>
                </div>
                <div className="modal-body">
                    <form className="modal-form">
                        <div>
                            <label htmlFor="">Title</label>
                            <input type="text" name="title" id="title"/>
                        </div>
                        <div>
                            <label htmlFor="">Content</label>
                            <textarea name="content" id="content" cols="30" rows="10"></textarea>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button onClick={props.onCancel}>Cancel</button>
                    <button onClick={onCancel}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default NoteForm;