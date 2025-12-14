import { Navigate, useLocation } from 'react-router-dom'
import { useAppContext } from '../context/AppContext.js';
import type { ReactNode } from 'react';

type RutaProtegidaProps ={
    children : ReactNode
}

const RutaProtegida = ({ children}: RutaProtegidaProps) => {

    const { isAuthenticated} = useAppContext()
  
    const location = useLocation();

    if(!isAuthenticated){
        return <Navigate to="/login" state={location.state} replace />
    }
  
    return children;
}

export default RutaProtegida;
