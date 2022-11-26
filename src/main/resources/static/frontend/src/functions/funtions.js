import axios from 'axios';

const allNotes = async (state) => {
    const request = await axios.get('http://localhost:8080/notes/get');
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
    allNotes(state)
}

const deleteNote = async (id, state) => {
    const request = await axios.put(`http://localhost:8080/notes/delete/${id}`)
    allNotes(state)
}

const archiveNote = async (id, state) => {
    const request = await axios.put(`http://localhost:8080/notes/archive/${id}`)
    allNotes(state)
}

const formatDate = (date) => {
    let d = new Date(date);
    let month = (d.getMonth() + 1).toString();
    let day = d.getDate().toString();
    let year = d.getFullYear();
    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }
    return [year, month, day].join('-');
}

export {
    allNotes,
    saveNote,
    formatDate,
    getNoteById,
    deleteNote,
    archiveNote,
    updateNote
}