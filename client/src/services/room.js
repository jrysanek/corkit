import api from './api-helper';

export const getRooms = async () => {
    const token = await localStorage.getItem('authToken');
    if (token) {
        api.defaults.headers.common.authorization = `Bearer ${token}`
        const resp = await api.get('/rooms');
        console.log(resp)
        return resp.data
        
    }
        return []
}

export const getToDoList = async (id) => {
    const token = localStorage.getItem('authToken');
    if (token) {
        api.defaults.headers.common.authorization = `Bearer ${token}`
        const resp = await api.get(`/rooms/${id}/to_dos`);
        console.log(resp)
        return resp.data
        
    }
        return false
}

export const createToDo = async (id, data) => {
    const token = localStorage.getItem('authToken');
    if (token) {
        api.defaults.headers.common.authorization = `Bearer ${token}`
        const resp = await api.post(`/rooms/${id}/to_dos`, data);
        console.log(resp)
        return resp.data
        
    }
        return false
}


export const editToDo = async (id, data, room_id) => {
    const token = localStorage.getItem('authToken');
    if (token) {
        api.defaults.headers.common.authorization = `Bearer ${token}`
        const resp = await api.put(`/rooms/${room_id}/to_dos/${id}`, {"to_do": data});
        console.log(resp)
        return resp.data
        
    }
        return false
}


export const deleteToDo = async (id, toDoId) => {
    const token = localStorage.getItem('authToken');
    if (token) {
        api.defaults.headers.common.authorization = `Bearer ${token}`
        const resp = await api.delete(`/rooms/${id}/to_dos/${toDoId}`);
        console.log(resp)
        return resp.data
        
    }
        return false
}