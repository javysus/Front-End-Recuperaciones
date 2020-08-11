import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
} from "shards-react";
import equipamientoService from '../services/equipamiento.service';
import EquipamientoUpdate from '../components/forms/EquipamientoUpdate'
import PageTitle from "../components/common/PageTitle";

class EquipamientoUpdateForm extends Component {

  constructor(props) {
    super(props);

    this.handleEquipamientoSubmit = this.handleEquipamientoSubmit.bind(this);
  }

  handleEquipamientoSubmit(data) {
    equipamientoService.getById(data.id).then((equipo) => equipamientoService.update({'id': data.id, 'idSala': data.idSala, 'nombre': equipo.data.nombre})
      .then((response) => console.log(response))
      .catch((error) => console.log(error)));
  }

  render() {

    return (
      <Container fluid className="main-content-container px-4 pb-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="5" title="Actualizar Equipamiento" subtitle="" className="text-sm-left" />
        </Row>

        <EquipamientoUpdate
          onSubmit={this.handleEquipamientoSubmit}
        ></EquipamientoUpdate>
      </Container>
    );
  }
};

export default EquipamientoUpdateForm;
