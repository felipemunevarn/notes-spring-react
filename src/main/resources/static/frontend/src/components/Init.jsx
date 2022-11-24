import React, { useEffect, useState } from "react";
import { allNotes, getNoteById } from "../functions/funtions";
import Note from "./Note";
import NoteForm from "./NoteForm";

const Init = () => {

    const [notes, setNotes] = useState(null);
    const [note, setNote] = useState(null);
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const showModal = (noteId) => {
        setShow(true)
        getNoteById(setNote, noteId, setTitle, setContent);
        console.log(noteId);
    }

    const cancelModal = () => setShow(false)

    useEffect(() => {
        allNotes(setNotes);
    }, [])

    const noteTemp = ''

    return (
        <>
            <div className="init-content">
                <h1>My Notes</h1>
                <button className="init-create-button" 
                    onClick={()=>showModal(0)}
                >
                    Create note
                </button>
                <a href="/">Archived notes</a>
            </div>
            <NoteForm onCancel={cancelModal} show={show}
                notes={notes} setNotes={setNotes}
                note={note}
                title={title} setTitle={setTitle}
                content={content} setContent={setContent}
            />
            <div className="notes-container">
                {notes !== null ? (
                    notes.map(note => (
                        <div key={note.id}>
                            <Note id={note.id} 
                                onClickEdit={showModal} 
                                onCancel={cancelModal} show={show}
                                setNotes={setNotes}
                                note={note}
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