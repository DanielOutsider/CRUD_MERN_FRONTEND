import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './utils/ProtectedRoute';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import RecoveryPasswordPage from './pages/RecoveryPasswordPage';
import UserDashboard from './pages/UserDashboard';
import ManageUsers from './pages/manage/security/users/ManageUsers';
import ManageGroups from './pages/ManageGroups';
import ManageCourses from './pages/ManageCourses';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/recovery-password" element={<RecoveryPasswordPage />} />
            <Route path="/dashboard" element={<ProtectedRoute><UserDashboard /></ProtectedRoute>} />
            <Route path="/manage/security/users" element={<ProtectedRoute><ManageUsers /></ProtectedRoute>} />
            <Route path="/manage/groups" element={<ProtectedRoute><ManageGroups /></ProtectedRoute>} />
            <Route path="/manage/courses" element={<ProtectedRoute><ManageCourses /></ProtectedRoute>} />
        </Routes>
    );
};

export default AppRoutes;
