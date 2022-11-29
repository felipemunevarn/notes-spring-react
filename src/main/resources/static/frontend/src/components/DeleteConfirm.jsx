import React, { useState } from "react";

const DeleteConfirm = props => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleTrashClick(props.note.id, props.setNotes)
        props.cancelDeleteModal()
    }

    if (!props.showDelete){
        return null;
    }

    return (
        <div className="modal" onClick={props.onCancel}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-body">
                    <form className="modal-form" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="">Are you sure you want to delete this note?</label>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button onClick={handleSubmit}>Yes</button>
                    <button onClick={props.cancelDeleteModal}>No</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteConfirm;