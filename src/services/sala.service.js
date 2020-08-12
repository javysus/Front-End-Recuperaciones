import { api } from '../helpers';

function getAll() {
    return api.get(`/SalasRecup`);
}

function getSala(id) {
    return api.get(`/SalasRecupFind?id=${id}`);
}

function getDisponibles() {
    return api.get(`/SalasRecup/Disponibles`);
}


function update(data) {
    return api.put(`/SalasRecup/Actualizar`, data);
}

const salaService = {
    getAll,
    getSala,
    getDisponibles,
    update
};

export default salaService;
