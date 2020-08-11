import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button
} from "shards-react";
import equipamientoService from '../services/equipamiento.service';

import PageTitle from "../components/common/PageTitle";

class EquipamientoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      equipos: [],
    };
    this.handleDeleteSubmit = this.handleDeleteSubmit.bind(this);
  }

  handleDeleteSubmit(data) {
    equipamientoService.borrarEquip(data.id).then((response) => console.log(response))
  }

  componentDidMount() {
    equipamientoService.getAll().then((response) => {
      this.setState({
        equipos: response.status === 200 ? response.data : [],
      })
    });
  }



  render() {
    const { equipos } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Salas de Recuperación" subtitle="" className="text-sm-left" />
        </Row>

        <Row>
          {equipos.map((equip, index) => {
            return (
              <Col lg="4" key={equip.id}>
                <Card small className="card-post mb-4">
                  <CardBody>
                    <p className="card-text text-center text-muted">Identificador: {equip.id}</p>
                    <p className="card-text text-center text-muted">{equip.nombre}</p>
                    <p className="card-text text-center text-muted">Sala: {equip.idSala}</p>

                    <Button variant="success"
                    onClick={(event) => this.handleDeleteSubmit({'id': equip.id})}>Eliminar</Button>{' '}
                  </CardBody>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    );
  }

}

export default EquipamientoList;
