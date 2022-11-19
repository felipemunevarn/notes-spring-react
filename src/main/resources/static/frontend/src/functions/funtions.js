import axios from 'axios';

const allNotes = async () => {
    const request = await axios.get('http://localhost:8080/notes/get');
    console.log(request);
}

export {
    allNotes
}