import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import RecoveryPasswordPage from './pages/RecoveryPasswordPage';
import UserDashboard from './pages/UserDashboard';
import ManageUsers from './pages/ManageUsers';
import ManageGroups from './pages/ManageGroups';
import ManageCourses from './pages/ManageCourses';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/recovery-password" element={<RecoveryPasswordPage />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/manage/users" element={<ManageUsers />} />
            <Route path="/manage/groups" element={<ManageGroups />} />
            <Route path="/manage/courses" element={<ManageCourses />} />
        </Routes>
    );
};

export default AppRoutes;
