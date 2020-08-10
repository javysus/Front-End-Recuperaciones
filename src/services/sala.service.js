import { api } from '../helpers';

function getAll() {
    return api.get(`/SalasRecup`);
}

function getDisponibles() {
    return api.get(`/SalasRecup/Disponibles`);
}


function update(data) {
    return api.put(`/SalasRecup/Actualizar`, data);
}

const salaService = {
    getAll,
    getDisponibles,
    update
};

export default salaService;
