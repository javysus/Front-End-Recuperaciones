import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
} from "shards-react";
import camaService from '../services/cama.service';
import CamaAdd from '../components/forms/CamaAdd';
import PageTitle from "../components/common/PageTitle";

class CamaAddForm extends Component {

  constructor(props) {
    super(props);

    this.handleCamaAddSubmit = this.handleCamaAddSubmit.bind(this);
  }

  handleCamaAddSubmit(data) {
    camaService.create(data)
      .then(function(response){ if(response.data){window.alert('Cama ingresada.')}else{window.alert('No se ha podido ingresar.')}})
      .catch((error) => window.alert('Ha ocurrido un error. Intente nuevamente.'));
  }

  render() {

    return (
      <Container fluid className="main-content-container px-4 pb-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="5" title="Agregar Cama de Recuperación" subtitle="" className="text-sm-left" />
        </Row>

        <CamaAdd
          onSubmit={this.handleCamaAddSubmit}
        ></CamaAdd>
      </Container>
    );
  }
};

export default CamaAddForm;
