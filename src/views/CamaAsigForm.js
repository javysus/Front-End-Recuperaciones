import React, { Component } from "react";
import {
  Container,
  Row,
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import CamaAsig from "../components/forms/CamaAsig";
import camaService from '../services/cama.service';
import salaService from '../services/sala.service';

class CamaAsigForm extends Component {

  constructor(props) {
    super(props);

    this.handleAsignacionSubmit = this.handleAsignacionSubmit.bind(this);
  }

  handleAsignacionSubmit(data) {

    fetch('https://ms-paciente.herokuapp.com/paciente/obtenerId/'+data.idPaciente).then((res)=>res.json()).then(
        function(pacienteRes){
        console.log(pacienteRes);
        if(pacienteRes.res.estado == 4){
          camaService.getCama(data.id).then((cama) => camaService.update({'id':data.id,'idPaciente':data.idPaciente, 'disponible': 'false', 'fechaUso': 'null', 'idSala': cama.data.idSala, 'idPersonalR': data.idPersonal})
          .then(function(response){ if(response.data){
            salaService.getSala(cama.data.idSala)
          .then((sala) => salaService.update({'id':cama.data.idSala, 'camas':sala.data.camas, 'disponibles': sala.data.disponibles - 1}));
            window.alert('Paciente asignado correctamente.')}else{window.alert('No se ha podido ingresar.')} window.location.reload(false)})
          .catch((error) => console.log(error)))
        }
        else{
          window.alert('Paciente no se encuentra en estado de recuperación.')
        }
      })
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
