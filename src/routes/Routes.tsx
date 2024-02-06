import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';

import { HomePage } from '../pages/HomePage.tsx';
import { LoginPage } from '../pages/LoginPage.tsx';
import { RegisterPage } from '../pages/RegisterPage.tsx';
import { DashboardPage } from '../pages/DashboardPage.tsx';
import { UsersPage } from '../pages/manage/users/UsersPage.tsx';

export const AppRoutes = () => {
    return (
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/register' element={<RegisterPage/>}></Route>
          <Route path='/dashboard' element={<DashboardPage/>}></Route>

          <Route path='/manage/users' element={<UsersPage/>}></Route>

          <Route path='*' element={<Navigate to='/' replace />}></Route>
        </Routes>
    )
}