import React, { useEffect, useState } from "react";
import { allArchivedNotes, getNoteById } from "../functions/funtions";
import Note from "./Note";
import NoteForm from "./NoteForm";

const InitArchived = () => {

    const [notes, setNotes] = useState(null);
    const [note, setNote] = useState(null);
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const showModal = (noteId) => {
        setShow(true)
        if (noteId === 0) {
            setTitle("")
            setContent("")
            setNote(null)
        } else {
            getNoteById(setNote, noteId, setTitle, setContent)
        }
    }

    const cancelModal = () => setShow(false)

    useEffect(() => {
        allArchivedNotes(setNotes);
    }, [])

    const noteTemp = ''

    return (
        <>
            <div className="init-content">
                <h1>Archived Notes</h1>
                <a className="header-link" href="/">Go back to unarchived notes</a>
            </div>
            <NoteForm onCancel={cancelModal} show={show}
                notes={notes} setNotes={setNotes}
                note={note} setNote={setNote}
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

export default InitArchived;