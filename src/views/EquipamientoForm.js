import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
} from "shards-react";
import equipamientoService from '../services/equipamiento.service';
import Equipamiento from '../components/forms/Equipamiento'
import PageTitle from "../components/common/PageTitle";

class EquipamientoForm extends Component {

  constructor(props) {
    super(props);

    this.handleEquipamientoSubmit = this.handleEquipamientoSubmit.bind(this);
  }

  handleEquipamientoSubmit(data) {
    equipamientoService.create(data)
      .then(function(response){ if(response.data){window.alert('Ingresado.')}else{window.alert('No se ha podido ingresar.')} window.location.reload(false)})
      .catch((error) => console.log(error));
  }

  render() {

    return (
      <Container fluid className="main-content-container px-4 pb-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="5" title="Agregar Equipamiento" subtitle="" className="text-sm-left" />
        </Row>

        <Equipamiento
          onSubmit={this.handleEquipamientoSubmit}
        ></Equipamiento>
      </Container>
    );
  }
};

export default EquipamientoForm;
