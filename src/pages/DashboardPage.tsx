import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSessionStorage } from "../hooks/useSessionStorage.ts";

export const DashboardPage = () => {

    let loggedIn = useSessionStorage('sessionToken');
    let navigate = useNavigate();

    useEffect(() => {
        if (!loggedIn){
            return navigate('/login')
        }
    }, [loggedIn])

    return (
        <div>
            <h1>
                Dashboard Page
            </h1>
        </div>
    )
}