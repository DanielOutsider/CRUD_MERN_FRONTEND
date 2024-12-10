// FilterUsersForm.js
import React from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';

const FilterUsersForm = () => {
    return (
        <Card className="mb-3">
            <Card.Header className="bg-primary text-white">
                <h5 className='card-title'>Filtrar Registros</h5>
            </Card.Header>
            <Card.Body>
                <Form>
                    <Row>
                        <Col md={4} className="mb-3">
                            <Form.Group controlId="formFullName">
                                <Form.Label>Nombre completo</Form.Label>
                                <Form.Control type="text" placeholder="Escribir el nombre o un indicio del nombre" />
                            </Form.Group>
                        </Col>
                        <Col md={4} className="mb-3">
                            <Form.Group controlId="formUsername">
                                <Form.Label>Nombre de usuario</Form.Label>
                                <Form.Control type="text" placeholder="Nombre de usuario" />
                            </Form.Group>
                        </Col>
                        <Col md={4} className="mb-3">
                            <Form.Group controlId="formEmail">
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control type="text" placeholder="Correo electrónico" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group controlId="formShowDeleted" className="mt-2">
                        <Form.Check type="switch" label="Mostrar eliminados" />
                    </Form.Group>
                    <Button variant="primary" className="position-static mt-3">
                        Buscar
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default FilterUsersForm;
