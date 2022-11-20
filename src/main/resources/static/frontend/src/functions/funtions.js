import axios from 'axios';

const allNotes = async (state) => {
    const request = await axios.get('http://localhost:8080/notes/get');
    state(request.data);
}

const saveNote = async (body) => {
    // const request = await axios.post('http://localhost:8080/notes' )
    console.log(body)
}

export {
    allNotes,
    saveNote
}