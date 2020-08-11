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
    camaService.getCama(data.id).then((cama) => camaService.update({'id':data.id,'idPaciente':data.idPaciente, 'disponible': 'false', 'fechaUso': 'null', 'idSala': cama.data.idSala})
    .then((response) => console.log(response))
    .catch((error) => console.log(error)))
    /*camaService.update({'id':data.id,'idPaciente':data.idPaciente, 'disponible': 'false', 'fechaUso': 'null', 'idSala': 1})
      .then((response) => console.log(response))
      .catch((error) => console.log(error));*/
    //camaService.getCama(data.id).then((cama) => console.log(cama,cama.data.idSala));
  }

  render() {

    return (
      <Container fluid className="main-content-container px-4 pb-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="5" title="Asignar Cama de Recuperación" subtitle="" className="text-sm-left" />
        </Row>

        <CamaAsig
          onSubmit={this.handleAsignacionSubmit}
        ></CamaAsig>
      </Container>
    );
  }
};

export default CamaAsigForm;
