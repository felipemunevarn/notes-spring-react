import React, { useState } from "react";
import { deleteNote, archiveNote } from "../functions/funtions";
import DeleteConfirm from "./DeleteConfirm";

const Note = ({ note, onClickEdit, setNotes, show }) => {
    
    const [showDelete, setShowDelete] = useState(false);
    
    const handleTrashClick = (id, state) => {
        deleteNote(id, state)
    }

    const handleArchiveClick = (id, state) => {
        archiveNote(id, state)
    }

    const showDeleteModal = () => {
        setShowDelete(true)
    }

    const cancelDeleteModal = () => setShowDelete(false)

    return (
        <>
            <div className="note">
                <div className="note-image">
                    <img src="../../icons8-note-50light.png" alt="note-icon" width="75" height="75" />
                </div>
                <div className="note-txt">
                    <h2 className="title-txt">{note.title}</h2>
                    <p className="date-txt">Last edited by {note.modified.substr(0,10)}</p>
                </div>
                <div className="note-icons">
                    <div className="archive-icon">
                        <img 
                            src={note.archived ? "../../icons8-upload-64.png" : "../../icons8-filing-cabinet-64.png"}
                            alt="archive-icon" 
                            onClick={() => handleArchiveClick(note.id, setNotes)}
                            width="20" height="20" />
                        <span className="toolTipArchive">{note.archived ? "Unarchive Note" : "Archive Note"}</span>
                    </div>
                    <div className="edit-icon">
                        <img src="../../icons8-edit-80.png" 
                            alt="edit-icon" 
                            onClick={() => onClickEdit(note.id)} 
                            width="20" height="20" />
                        <span className="toolTipEdit">Edit Note</span>
                    </div>
                    <div className="trash-icon">
                        <img src="../../icons8-trash-can-50.png" 
                            alt="trash-icon" 
                            // onClick={() => handleTrashClick(note.id, setNotes)}
                            onClick={()=>showDeleteModal()}
                            width="20" height="20" />
                        <span className="toolTipTrash" onClick={()=>showDeleteModal()}>Delete Note</span>
                    </div>
                    <DeleteConfirm 
                        showDelete={showDelete} 
                        cancelDeleteModal={cancelDeleteModal} 
                        setShowDelete={setShowDelete}
                        handleTrashClick={handleTrashClick}
                        note={note}
                        setNotes={setNotes}
                    />
                </div>
            </div>
        </> 
    )
}

export default Note;