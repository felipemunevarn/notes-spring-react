import React from "react";
import { deleteNote } from "../functions/funtions";

const Note = ({ note, onClickEdit, setNotes }) => {

    const handleClick = (id, state) => {
        deleteNote(id, state)
        // console.log(id);
        // console.log(body);
        // console.log(state);
    }

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
                    <img src="../../icons8-filing-cabinet-64.png" 
                        alt="archive-icon" 
                        width="20" height="20" />
                    <span className="tooltiptext">Archive Note</span>
                    <img src="../../icons8-edit-80.png" 
                        alt="edit-icon" 
                        onClick={() => onClickEdit(note.id)} 
                        width="20" height="20" />
                    <span className="tooltiptext">Edit Note</span>
                    <img src="../../icons8-trash-can-50.png" 
                        alt="trash-icon" 
                        onClick={() => handleClick(note.id, setNotes)}
                        width="20" height="20" />
                    <span className="tooltiptext">Delete Note</span>
                </div>
            </div>
        </> 
    )
}

export default Note;