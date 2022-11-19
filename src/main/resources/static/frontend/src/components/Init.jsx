import React, { useEffect, useState } from "react";
import { allNotes } from "../functions/funtions";

const Init = () => {

    const [notes, setNotes] = useState(null);

    useEffect(() => {
        allNotes(setNotes);
    }, [])

    return (
        <>
            <h1>My Notes</h1>
            <div>
                {notes === null ? 'there are no notes yet' : 'there are notes'}
            </div>
        </>        
    )
}

export default Init;