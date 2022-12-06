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
    const [category, setCategory] = useState("");

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
                <a href="/archived">Archived notes</a>
            </div>
            <NoteForm onCancel={cancelModal} show={show}
                notes={notes} setNotes={setNotes}
                note={note} setNote={setNote}
                title={title} setTitle={setTitle}
                content={content} setContent={setContent}
                category={category} setCategory={setCategory}
            />
            <div className="notes-container">
                {notes !== null ? (
                    notes.map(note => (
                        <div key={note.id}>
                            <Note id={note.id} 
                                onClickEdit={showModal} 
                                onCancel={cancelModal} show={show}
                                note={note} setNotes={setNotes}
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