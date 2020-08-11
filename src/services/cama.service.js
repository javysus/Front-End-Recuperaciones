import { api } from '../helpers';

function getBySala(sala,disponible) {
    return api.get(`/CamaRecup?sala=${sala}&disponible=${disponible}`);
}

function getDisponibles() {
    return api.get(`/CamaRecup/Disponibles`);
}

function getNoDisponibles() {
    return api.get(`/CamaRecup/NoDisponibles`);
}

function getCama(id) {
    return api.get(`/CamaRecupFind?id=${id}`);
}

function create(data) {
    return api.post(`/CamaRecup/Agregar`, data);
}

function update(data) {
    return api.put(`CamaRecup/Actualizar`, data);
}

const camaService = {
    getBySala,
    getDisponibles,
    getNoDisponibles,
    getCama,
    create,
    update
};

export default camaService;
