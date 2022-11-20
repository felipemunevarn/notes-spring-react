import axios from 'axios';

const allNotes = async (state) => {
    const request = await axios.get('http://localhost:8080/notes/get');
    state(request.data);
}

export {
    allNotes
}