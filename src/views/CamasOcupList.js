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

  render() {
    const { camas } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Camas de Recuperación Asignadas" subtitle="" className="text-sm-left" />
        </Row>

        <Row>
          {camas.map((cama, index) => {
            return (
              <Col lg="2" key={cama.id}>
                <Card small className="card-post mb-4">
                  <CardBody>
                    <p className="card-text text-muted">Cama: {cama.id}</p>
                    <p className="card-text text-muted">Sala: {cama.idSala}</p>
                    <p className="card-text text-muted">Paciente: {cama.idPaciente}</p>
                  </CardBody>
                  <Button variant="primary">Informar llegada</Button>{' '}
                  <Button variant="success">Liberar</Button>{' '}
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