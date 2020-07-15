import api from './api-helper';

export const getRooms = async () => {
    const token = localStorage.getItem('authToken');
    if (token) {
        api.defaults.headers.common.authorization = `Bearer ${token}`
        const resp = await api.get('/rooms');
        console.log(resp)
        return resp.data
        
    }
        return false
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
