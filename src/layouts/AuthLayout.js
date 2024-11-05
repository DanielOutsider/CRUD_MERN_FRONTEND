import React from 'react';
import { Container } from 'react-bootstrap';

const AuthLayout = ({ children }) => {
    return (
        <Container className="mt-5">
            <div className="auth-wrapper">
                {children}
            </div>
        </Container>
    );
};

export default AuthLayout;
