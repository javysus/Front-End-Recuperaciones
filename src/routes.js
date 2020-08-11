import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import SalasList from './views/SalasList';
import CamasList from "./views/CamasList";
import CamasOcupList from "./views/CamasOcupList";
import EquipamientoForm from "./views/EquipamientoForm"
import CamaAddForm from "./views/CamaAddForm"
import CamaAsigForm from "./views/CamaAsigForm"
import EquipamientoForm2 from "./views/EquipamientoForm2"
import EquipamientoList from "./views/EquipamientoList"
import EquipamientoUpdateForm from "./views/EquipamientoUpdateForm"

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/camas-disponibles" />
  },
  {
    path: "/salas-recuperacion",
    layout: DefaultLayout,
    component: SalasList
  },
  {
    path: "/camas-disponibles",
    layout: DefaultLayout,
    component: CamasList
  },
  {
    path: "/camas-nodisponibles",
    layout: DefaultLayout,
    component: CamasOcupList
  },
  {
    path: "/agregar-equipamiento",
    layout: DefaultLayout,
    component: EquipamientoForm
  },
  {
    path: "/agregar-cama",
    layout: DefaultLayout,
    component: CamaAddForm
  },
  {
    path: "/asignar-cama",
    layout: DefaultLayout,
    component: CamaAsigForm
  },
  {
    path: "/prueba",
    layout: DefaultLayout,
    component: EquipamientoForm2
  },
  {
    path: "/equipamiento",
    layout: DefaultLayout,
    component: EquipamientoList
  },
  {
    path: "/actualizar-equipamiento",
    layout: DefaultLayout,
    component: EquipamientoUpdateForm
  }
];
