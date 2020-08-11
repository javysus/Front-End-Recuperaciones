import React, { Component } from "react";
import {
  Container,
  Row,
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import CamaAsig from "../components/forms/CamaAsig";
import camaService from '../services/cama.service';

class CamaAsigForm extends Component {

  constructor(props) {
    super(props);

    this.handleAsignacionSubmit = this.handleAsignacionSubmit.bind(this);
  }

  handleAsignacionSubmit(data) {
    camaService.update({'id':data.id,'paciente':data.paciente})
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }

  render() {

    return (
      <Container fluid className="main-content-container px-4 pb-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Asignar Cama de Recuperación" subtitle="" className="text-sm-left" />
        </Row>

        <CamaAsig
          onSubmit={this.handleAsignacionSubmit}
        ></CamaAsig>
      </Container>
    );
  }
};

export default CamaAsigForm;
