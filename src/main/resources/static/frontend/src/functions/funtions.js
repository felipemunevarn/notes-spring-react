import axios from 'axios';

const allNotes = async (state) => {
    const request = await axios.get('http://localhost:8080/notes/get');
    state(request.data);
}

const saveNote = async (body) => {
    console.log(body);
    const request = await axios.post('http://localhost:8080/notes/new', body)
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
    formatDate
}