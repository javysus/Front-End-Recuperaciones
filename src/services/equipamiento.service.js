import { api } from '../helpers';

function getBySala(sala) {
    return api.get(`/Equipamiento/Sala?idsala=${sala}`);
}

function borrarEquip(id) {
    return api.delete(`/Equipamiento/Eliminar?id=${id}`);
}

function getAll() {
    return api.get(`/Equipamiento`);
}

function create(data) {
    return api.post(`/Equipamiento/Agregar`, data);
}

function update(data) {
    return api.put(`/Equipamiento/Actualizar`,data)
}
const equipamientoService = {
    getBySala,
    getAll,
    borrarEquip,
    create,
    update
};

export default equipamientoService;
