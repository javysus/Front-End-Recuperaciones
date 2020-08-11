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

function crear(data) {
    return api.post(`/CamaRecup/Agregar`, data);
}

function update(data) {
    return api.put(`up/Actualizar`, data);
}

const camaService = {
    getBySala,
    getDisponibles,
    getNoDisponibles,
    crear,
    update
};

export default camaService;
