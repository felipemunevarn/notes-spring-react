import React from "react";

const NoteForm = props => {
    if (!props.show){
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title">Create / Edit note</h1>
                </div>
                <div className="modal-body">Content</div>
                <div className="modal-footer">
                    <button onClick={props.onCancel}>Cancel</button>
                    <button>Save</button>
                </div>
            </div>
        </div>
    )
}

export default NoteForm;