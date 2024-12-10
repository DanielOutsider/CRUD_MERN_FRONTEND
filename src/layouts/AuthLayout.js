import React from 'react';
import './AuthLayout.css';

const AuthLayout = ({ children }) => {
    return (
        <div className="auth-layout">
            <div className="auth-image"></div>
            <div className="auth-form">
                <div className="auth-wrapper">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
