import React, { useEffect, useState } from "react";
import { allNotes, getNoteById } from "../functions/funtions";
import { allCategories } from "../functions/categoryFunctions";
import Note from "./Note";
import NoteForm from "./NoteForm";

const Init = () => {

    const [notes, setNotes] = useState(null);
    const [note, setNote] = useState(null);
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");
    const [categories, setCategories] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [filteredList, setFileteredList] = useState(null)

    const showModal = (noteId) => {
        if (noteId === 0) {
            setTitle("")
            setContent("")
            setNote(null)
            setCategories([])
        } else {
            getNoteById(noteId, setNote, setTitle, setContent, setCategories)
        }
        setTimeout(() => {setShow(true)}, 300)
    }

    const cancelModal = () => {
        setShow(false)
        allCategories(setCategories)
    }


    useEffect(() => {
        allNotes(setNotes);
        allCategories(setCategories);
        allNotes(setFileteredList)
    }, [])

    useEffect(() => {
        allNotes(setFileteredList)
        allCategories(setCategories)
    }, [notes])
    
    useEffect(() => {
        if (notes !== null && selectedCategory !== "No Filter") {
            setFileteredList(filterNotes(notes));
        } else {
            allNotes(setFileteredList)
        }
    }, [selectedCategory])
            
    const filterNotes = (unfilteredNotes) => {
        return unfilteredNotes.filter(note => note.categories.some(cat => cat.name === selectedCategory))
    }

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value)
        e.preventDefault()
    }

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
                categories={categories} setCategories={setCategories}
            />
            <div>
                <label htmlFor="categories">Category filter</label>
                <select name="categories" id="categories"
                    onChange={e => handleCategoryChange(e)}
                >
                    <option value={null}>No Filter</option>
                    {categories ? (
                        categories.map(category =>
                                <option key={category.id} 
                                    value={category.name}
                                >{category.name}
                                </option>
                        )
                    ):("There are not categories")
                    }
                </select>
            </div>
            <div className="notes-container">
                {filteredList !== null ? (
                    filteredList.map(note => (
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