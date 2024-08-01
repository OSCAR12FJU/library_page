import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({element: Component}) {
    const isAuthenticated = () =>{
        return !!localStorage.getItem('authToken');
    };
    return(
        
         isAuthenticated() ? <Component /> : <Navigate to="/Iniciar-Sesion" />
)
};

export default PrivateRoute;