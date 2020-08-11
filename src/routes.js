import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import PacienteForm from './views/PacienteForm';
import PersonalForm from './views/PersonalForm';
import PabellonForm from './views/PabellonForm';
import AsignarForm from './views/AsignarForm';
import LiberarForm from './views/LiberarForm';
import PabellonDispList from './views/PabellonDispList';
import PabellonOcpList from './views/PabellonOcpList';
import PersonalAsgList from './views/PersonalAsgList';
import SalasList from './views/SalasList';
import CamasList from "./views/CamasList";
import EquipamientoForm from "./views/EquipamientoForm"
import CamaAddForm from "./views/CamaAddForm"
import CamaAsigForm from "./views/CamaAsigForm"

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/blog-overview" />
  },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  },
  {
    path: "/paciente-form",
    layout: DefaultLayout,
    component: PacienteForm
  },
  {
    path: "/personal-form",
    layout: DefaultLayout,
    component: PersonalForm
  },
  {
    path: "/pabellon-form",
    layout: DefaultLayout,
    component: PabellonForm
  },
  {
    path: "/asignar-form",
    layout: DefaultLayout,
    component: AsignarForm
  },
  {
    path: "/liberar-form",
    layout: DefaultLayout,
    component: LiberarForm
  },
  {
    path: "/pabellondisp-list",
    layout: DefaultLayout,
    component: PabellonDispList
  },
  {
    path: "/pabellonocp-list",
    layout: DefaultLayout,
    component: PabellonOcpList
  },
  {
    path: "/personalasg-list",
    layout: DefaultLayout,
    component: PersonalAsgList
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
  }
];
