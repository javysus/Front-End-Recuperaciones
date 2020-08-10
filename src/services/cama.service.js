import { api } from '../helpers';

function getBySala(sala,disponible) {
    return api.get(`/CamaRecup?sala=${sala}&disponble=${disponible}`);
}

function getDisponibles() {
    return api.get(`/CamaRecup/Disponibles`);
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
