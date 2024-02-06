import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSessionStorage } from "../hooks/useSessionStorage.ts";
import { Dashboard } from "../components/dashboard/Dashboard.tsx";

export const DashboardPage = () => {

    let loggedIn = useSessionStorage('sessionToken');
    let navigate = useNavigate();

    useEffect(() => {
        if (!loggedIn){
            return navigate('/login')
        }
    }, [loggedIn])

    return (
        <Dashboard />
    )
}