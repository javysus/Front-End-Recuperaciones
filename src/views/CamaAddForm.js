import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
} from "shards-react";
import camaService from '../services/equipamiento.service';
import CamaAdd from '../components/forms/CamaAdd'
import PageTitle from "../components/common/PageTitle";

class CamaAddForm extends Component {

  constructor(props) {
    super(props);

    this.handleCamaSubmit = this.handleCamaSubmit.bind(this);
  }

  handleCamaSubmit(data) {
    camaService.create(data)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }

  render() {

    return (
      <Container fluid className="main-content-container px-4 pb-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Agregar" subtitle="" className="text-sm-left" />
        </Row>

        <CamaAdd
          onSubmit={this.handleCamaSubmit}
        ></CamaAdd>
      </Container>
    );
  }
};

export default CamaAddForm;
