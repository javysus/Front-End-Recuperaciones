import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  FormGroup,
  Form,
  FormInput,
  Button,
  FormSelect
} from "shards-react";
import equipamientoService from '../services/equipamiento.service';
import Equipamiento from '../components/forms/Equipamiento'
import salaService from '../services/sala.service'
import PageTitle from "../components/common/PageTitle";

class EquipamientoForm extends Component {

  constructor(props) {
    super(props);

    this.handleEquipamientoSubmit = this.handleEquipamientoSubmit.bind(this);
    this.state = {
      salas: [],
    }
  }

  handleEquipamientoSubmit(data) {
    equipamientoService.create(data)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
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
    //const [equipamiento, setEquipamiento] = useState('');

    return (
      <Container fluid className="main-content-container px-4 pb-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Agregar" subtitle="" className="text-sm-left" />
        </Row>

        <Row>
        {/* Editor */}
        <Col lg="9" md="12">
          <Card small className="mb-3">
            <CardBody>
              <Form className="add-new-post">
                <FormGroup>
                  <label>Equipamiento</label>
                  <FormInput
                    //value={equipamiento}
                    //onChange={(event) => setEquipamiento(event.target.value)}
                    size="lg"
                    className="mb-3"
                    placeholder="Nombre del artículo" />
                </FormGroup>
                <FormGroup controlId="select-sala">
                <label>Sala</label>
                  <FormSelect as="select">
                    {salas.map((sala, index) => {
                      return (
                        <option>{sala.id}</option>
                      )
                    })}
                    <option>Ninguna</option>
                  </FormSelect>
              </FormGroup>
              </Form>
              <Button
                theme="primary"
                className="mb-2 mr-1"
                //onClick={(event) => this.handleEquipamientoSubmit({'equipamiento': equipamiento})}
                >
                  Agregar
                </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
      </Container>
    );
  }
};

export default EquipamientoForm;
