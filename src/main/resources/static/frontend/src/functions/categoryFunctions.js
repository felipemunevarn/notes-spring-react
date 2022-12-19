import axios from 'axios';

const allCategories = async (state) => {
    const request = await axios.get('http://localhost:8080/api/categories/get');
    state(request.data);
}

const getCategoryById = async (id, state) => {
    const request = await axios.get(`http://localhost:8080/api/categories/get/${id}`);
    state(request.data)
}

const saveCategory = async (body, state) => {
    const request = await axios.post('http://localhost:8080/api/categories/new', body)
    allCategories(state)
}

const addCategory = async (id, body, state) => {
    console.log(body);
    const request = await axios.post(`http://localhost:8080/api/notes/get/${id}/categories`, body);
    state(request.data)
}

export {
    allCategories,
    getCategoryById,
    saveCategory,
    addCategory
}