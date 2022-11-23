import React, { useEffect, useState } from "react";
import { allNotes } from "../functions/funtions";
import Note from "./Note";
import NoteForm from "./NoteForm";

const Init = () => {

    const [notes, setNotes] = useState(null);
    const [show, setShow] = useState(false);

    const showModal = () => setShow(true)
    const cancelModal = () => setShow(false)

    useEffect(() => {
        allNotes(setNotes);
    }, [])

    return (
        <>
            <div className="init-content">
                <h1>My Notes</h1>
                <button className="init-create-button" onClick={showModal}>Create note</button>
                <NoteForm onCancel={cancelModal} show={show}
                notes={notes} setNotes={setNotes}/>
                <a href="/">Archived notes</a>
            </div>
            <div  className="notes-container">
                {notes !== null ? (
                    notes.map(note => (
                        <div key={note.id}>
                            <Note note={note} onClick={showModal} 
                                onCancel={cancelModal} show={show}
                            />
                        </div>
                    ))
                ) : (
                    'There are no notes yet'
                )}
            </div>
        </>        
    )
}

export default Init;