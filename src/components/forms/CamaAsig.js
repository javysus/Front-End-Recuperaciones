import React, { useState } from 'react';
import PropTypes from "prop-types";
import {
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  FormInput,
  Button,
} from "shards-react";



const CamaAsig = ({
  onSubmit
  }) => {
    const [id, setId] = useState('');
    const [paciente, setPaciente] = useState('');

    return(
      <Row>
        {/* Editor */}
        <Col lg="9" md="12">
          <Card small className="mb-3">
            <CardBody>
              <Form className="add-new-post">
                <FormGroup>
                  <label>Cama de Recuperación</label>
                  <FormInput
                    value={id}
                    onChange={(event) => setId(event.target.value)}
                    size="lg"
                    className="mb-3"
                    placeholder="Ingresar ID de la cama a asignar" />
                </FormGroup>
                <FormGroup>
                  <label>Paciente</label>
                  <FormInput
                    value={paciente}
                    onChange={(event) => setPaciente(event.target.value)}
                    size="lg"
                    className="mb-3"
                    placeholder="Ingresar ID del paciente" />
                </FormGroup>
              </Form>
              <Button
                theme="primary"
                className="mb-2 mr-1"
                onClick={(event) => onSubmit({'id': id,'idPaciente': paciente})}
                // onClick={onSubmit}
                >
                  Agregar
                </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }

CamaAsig.propTypes = {
  onSubmit: PropTypes.func,
}

CamaAsig.defaultProps = {
  onSubmit: () => {},
}

export default CamaAsig;
