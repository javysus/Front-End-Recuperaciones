import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
} from "shards-react";
import salaService from '../services/sala.service';
import equipamientoService from '../services/equipamiento.service';

import PageTitle from "../components/common/PageTitle";

class SalasList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      salas: [],
    }
  }

  componentDidMount() {
    salaService.getAll().then((response) => {
      this.setState({
        salas: response.status === 200 ? response.data : [],
      })
    });
  }



  render() {
    const { salas } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Salas de Recuperación" subtitle="" className="text-sm-left" />
        </Row>

        <Row>
          {salas.map((sala, index) => {
            /*const { equipos } = fetch('https://recuperaciones.herokuapp.com/Equipamiento/Sala?idsala='+ sala.id)
            .then(response => response.json()).then(equipa => this.setState({equipa}));*/

            const { equipos } = fetch('https://recuperaciones.herokuapp.com/Equipamiento/Sala?idsala='+ sala.id)
            .then(response => response.json())/*.then(equipa => {equipa.map(equi =>
              <div key={equipa.id}> {equipa.nombre} </div>)});

            //const { equipa } = this.state.equipa;            //console.log(equip);
            /*
                    {this.state.equipa.map(equipa => 
                       <div key={equipa.id}> {equipa.nombre} </div>)}*/
            return (
              <Col lg="5" key={sala.id}>
                <Card small className="card-post mb-4">
                  <CardBody>
                    <p className="card-text text-muted">Sala: {sala.id}</p>
                    <p className="card-text text-muted">Camas: {sala.camas}</p>
                    <p className="card-text text-muted">Camas disponibles: {sala.disponibles}</p>
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

export default SalasList;
