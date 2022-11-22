import React, { useEffect, useState } from "react";
import { allNotes } from "../functions/funtions";
import Note from "./Note";
import NoteForm from "./NoteForm";

const Init = () => {

    const [notes, setNotes] = useState(null);
    const [show, setShow] = useState(false);
    const [body, setBody] = useState({});

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
                <NoteForm onCancel={cancelModal} body={body} setBody={setBody} show={show}/>
                <a href="/">Archived notes</a>
            </div>
            <div>
                {notes !== null ? (
                    notes.map(note => (
                        <div key={note.id}>
                            <Note note={note} onClick={showModal} 
                                onCancel={cancelModal} show={show}
                                body={body} setBody={setBody}    
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