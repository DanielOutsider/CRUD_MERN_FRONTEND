import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col, InputGroup, FormControl, Checkbox, Alert } from 'react-bootstrap';
import AuthLayout from '../layouts/AuthLayout';
import { login } from '../api/authService';
import ReactHtmlParser from 'react-html-parser';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/dashboard');
        }
    }, [navigate]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const result = await login(email, password);

        if (result?.status === 'success') {
            navigate('/dashboard'); // Redirigimos al dashboard si el login es exitoso
        } else if (result?.status === 'error') {
            setErrorMessage(result.errorHtml);
        }else{
            setErrorMessage(result.errorHtml);
        }
        setTimeout(() => setErrorMessage(''), 10000);

    };

    return (
        <AuthLayout>
            <Container>
                <Row className="justify-content-center">
                    <Col md={12}>
                        <div>
                            <img className='img-fluid mb-5' src="/images/logo-text.png" alt="Logo" />
                        </div>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                            <InputGroup className='mb-3'>
                                <FormControl
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                />
                                <InputGroup.Text>
                                <i className="bi bi-envelope-fill"></i>
                                </InputGroup.Text>
                            </InputGroup>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                            <InputGroup className='mb-3'>
                                <FormControl
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                />
                                <InputGroup.Text>
                                <i className="bi bi-lock-fill"></i>
                                </InputGroup.Text>
                            </InputGroup>
                            </Form.Group>

                            <Form.Group controlId="formBasicCheckbox" className='mb-3'>
                            <Form.Check
                                type="checkbox"
                                label="Remember Me"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="position-static w-100">
                                Login
                            </Button>

                            {errorMessage && (
                                <Alert className='mt-3' variant="danger" >
                                    {ReactHtmlParser(errorMessage)}
                                </Alert>
                            )}

                            <div className="text-center">
                                <Button variant="link" href="#" className="text-decoration-none mt-3">
                                    <i className="bi bi-lock"></i> Forgot your password?
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </AuthLayout>
    );
};

export default LoginPage;