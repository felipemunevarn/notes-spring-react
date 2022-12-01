import axios from 'axios';

const allCategories = async (state) => {
    const request = await axios.get('http://localhost:8080/categories/get');
    state(request.data);
}

const getCategoryById = async (id, state) => {
    const request = await axios.get(`http://localhost:8080/categories/get/${id}`);
    state(request.data)
}

const saveCategory = async (body, state) => {
    const request = await axios.post('http://localhost:8080/categories/new', body)
    allCategories(state)
}

export {
    allCategories,
    getCategoryById,
    saveCategory
}