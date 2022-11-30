import axios from 'axios';

const allNotes = async (state) => {
    const request = await axios.get('http://localhost:8080/notes/get');
    state(request.data);
}

const allArchivedNotes = async (state) => {
    const request = await axios.get('http://localhost:8080/notes/archived/get');
    state(request.data);
}

const getNoteById = async (noteState, id, titleState, contentState) => {
    const request = await axios.get(`http://localhost:8080/notes/get/${id}`);
    noteState(request.data);
    titleState(request.data.title)
    contentState(request.data.content)
}

const saveNote = async (body, state) => {
    const request = await axios.post('http://localhost:8080/notes/new', body)
    allNotes(state)
}

const updateNote = async (id, body, state) => {
    const request = await axios.put(`http://localhost:8080/notes/update/${id}`, body)
    body.archived ? allArchivedNotes(state) : allNotes(state)
}

const deleteNote = async (id, state, archived) => {
    const request = await axios.put(`http://localhost:8080/notes/delete/${id}`)
    archived ? allArchivedNotes(state) : allNotes(state)
}

const archiveNote = async (id, state, archived) => {
    const request = await axios.put(`http://localhost:8080/notes/archive/${id}`)
    archived ? allArchivedNotes(state) : allNotes(state)
}

const formatDate = (date) => {
    let UTC = 0 // Argentina, BsAs
    let date_format_str = date.getUTCFullYear() + "-" +
        ((date.getUTCMonth() + 1) > 9 ? (date.getUTCMonth() + 1) : ("0" + (date.getUTCMonth() + 1))) + "-" +
        ((date.getUTCDate() > 9) ? (date.getUTCDate()) : ("0" + (date.getUTCDate()))) + "T" + 
        (((date.getUTCHours() + UTC)) > 9 ? (date.getUTCHours() + UTC) : ("0" + (date.getUTCHours() + UTC))) + ":" + 
        ((date.getUTCMinutes() > 9) ? (date.getUTCMinutes()) : ("0" + (date.getUTCMinutes()))) + ":" + 
        ((date.getUTCSeconds() > 9) ? (date.getUTCSeconds()) : ("0" + (date.getUTCSeconds())));
    return date_format_str;
}

export {
    allNotes,
    saveNote,
    formatDate,
    getNoteById,
    deleteNote,
    archiveNote,
    updateNote,
    allArchivedNotes
}