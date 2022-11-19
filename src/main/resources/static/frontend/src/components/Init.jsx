import React, { useEffect } from "react";
import { allNotes } from "../functions/funtions";

const Init = () => {

    useEffect(() => {
        allNotes();
    }, [])

    return (
        <div>Initial</div>
    )
}

export default Init;