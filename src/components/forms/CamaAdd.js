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



const CamaAdd = ({
  onSubmit
  }) => {
    const [sala, setSala] = useState('');

    return(
      <Row>
        {/* Editor */}
        <Col lg="9" md="12">
          <Card small className="mb-3">
            <CardBody>
              <Form className="add-new-post">
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
                onClick={(event) => onSubmit({'idSala': sala})}
                >
                  Agregar
                </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }

CamaAdd.propTypes = {
  onSubmit: PropTypes.func,
}

CamaAdd.defaultProps = {
  onSubmit: () => {},
}

export default CamaAdd;