import React, { useState } from 'react';
import PropTypes from "prop-types";
import salaService from '../../services/sala.service';
import {
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  Button,
} from "shards-react";



const Equipamiento = ({
  onSubmit
  }) => {
    const [equipamiento, setEquipamiento] = useState('');
    const [sala, setSala] = useState('');

    return(
      <Row>
        {/* Editor */}
        <Col lg="9" md="12">
          <Card small className="mb-3">
            <CardBody>
              <Form className="add-new-post">
                <FormGroup>
                  <label>Equipamiento</label>
                  <FormInput
                    value={equipamiento}
                    onChange={(event) => setEquipamiento(event.target.value)}
                    size="lg"
                    className="mb-3"
                    placeholder="Nombre del artículo" />
                </FormGroup>
                <FormGroup>
                  <label>Sala</label>
                  <FormInput
                    value={sala}
                    onChange={(event) => setSala(event.target.value)}
                    size="lg"
                    className="mb-3"
                    placeholder="Id de Sala" />
                </FormGroup>
              </Form>
              <Button
                theme="primary"
                className="mb-2 mr-1"
                onClick={(event) => onSubmit({'nombre': equipamiento,'idSala': sala})}
                >
                  Agregar
                </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }

Equipamiento.propTypes = {
  onSubmit: PropTypes.func,
}

Equipamiento.defaultProps = {
  onSubmit: () => {},
}

export default Equipamiento;