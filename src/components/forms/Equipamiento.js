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
                <FormGroup controlId="select-sala">
                <label>Sala</label>
                  <FormSelect as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>Ninguna</option>
                  </FormSelect>
              </FormGroup>
              </Form>
              <Button
                theme="primary"
                className="mb-2 mr-1"
                onClick={(event) => onSubmit({'equipamiento': equipamiento})}
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