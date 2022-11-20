import React from "react";
import NoteForm from "./NoteForm";

const Note = ({ note, onClick, onCancel, show }) => {
    return (
        <>
            <div className="note">
                <div className="note-image">
                    <img src="../../icons8-note-50light.png" alt="note-icon" width="75" height="75" />
                </div>
                <div className="note-txt">
                    <h2>{note.title}</h2>
                    <p>Last edited by {note.modified.substr(0,10)}</p>
                </div>
                <div className="note-icons">
                    <img src="../../icons8-filing-cabinet-64.png" alt="archive-icon" width="20" height="20" />
                    <img src="../../icons8-edit-80.png" alt="edit-icon" onClick={onClick} width="20" height="20" />
                    <NoteForm onCancel={onCancel} show={show}/>
                    <img src="../../icons8-trash-can-50.png" alt="trash-icon" width="20" height="20" />
                </div>
            </div>
        </> 
    )
}

export default Note;