import { api } from '../helpers';

function getBySala() {
    return api.get(`/CamaRecup`);
}

function getDisponibles(sala,disponible) {
    return api.get(`/CamaRecup/Disponibles?sala=${sala}&disponble=${disponible}`);
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
    crear,
    update
};

export default camaService;
