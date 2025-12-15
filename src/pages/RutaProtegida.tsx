import { Navigate, useLocation } from 'react-router-dom'
import type { ReactNode } from 'react';
import { useAuthContext } from '../context/AuthContext.js';

type RutaProtegidaProps ={
    children : ReactNode
}

const RutaProtegida = ({ children}: RutaProtegidaProps) => {

    const { isAuthenticated} = useAuthContext()
  
    const location = useLocation();

    if(!isAuthenticated){
        return <Navigate to="/login" state={location.state} replace />
    }
  
    return children;
}

export default RutaProtegida;
