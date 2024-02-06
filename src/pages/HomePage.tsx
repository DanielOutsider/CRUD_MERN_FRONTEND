import React from "react";
//import { Dashboard } from "../components/dashboard/Dashboard.tsx";
import { Link } from 'react-router-dom';

export const HomePage = () => {
    return (
        <div>
            <div>Home</div>

            <Link to="/login">Go to Login</Link>
        </div>
    )
}