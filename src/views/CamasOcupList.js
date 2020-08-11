import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button
} from "shards-react";
import camaService from '../services/cama.service';

import PageTitle from "../components/common/PageTitle";

import Icon from "../images/camaocupada.png";

class CamasList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      camas: [],
    }
  }

  componentDidMount() {
    camaService.getNoDisponibles().then((response) => {
      this.setState({
        camas: response.status === 200 ? response.data : [],
      })
    });
  }

  handleLiberacionSubmit(data) {
    camaService.getCama(data.id).then((cama) => camaService.update({'id':data.id,'idPaciente':'null', 'disponible': 'true', 'fechaUso': 'null', 'idSala': cama.data.idSala})
    .then((response) => console.log(response))
    .catch((error) => console.log(error)));
  }

  handleLlegadaSubmit(data) {
    var today = new Date();
    camaService.getCama(data.id).then((cama) => camaService.update({'id':data.id,'idPaciente':cama.data.idPaciente, 'disponible': 'false', 'fechaUso': today, 'idSala': cama.data.idSala})
    .then((response) => console.log(response))
    .catch((error) => console.log(error)))
  }

  render() {
    const { camas } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="5" title="Camas de Recuperación Asignadas" subtitle="" className="text-sm-left" />
        </Row>

        <Row>
          {camas.map((cama, index) => {
            return (
              <Col lg="3" key={cama.id}>
                <Card small className="card-post mb-4">
                  <CardBody>
                    <img fluid src={Icon} width="171"/>
                    <p className="card-text text-center text-muted">Cama: {cama.id}</p>
                    <p className="card-text text-center text-muted">Sala: {cama.idSala}</p>
                    <p className="card-text text-center text-muted">Paciente: {cama.idPaciente}</p>
                  </CardBody>
                  <Button
                  onClick={(event) => this.handleLlegadaSubmit({'id': cama.id})}>Informar llegada</Button>{' '}
                  <Button theme="success"
                  onClick={(event) => this.handleLiberacionSubmit({'id': cama.id})}>Liberar</Button>{' '}
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    );
  }

}

export default CamasList;
