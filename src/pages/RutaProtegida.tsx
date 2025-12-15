import { Navigate, useLocation } from 'react-router-dom'
import type { ReactNode } from 'react'
import { useAuthContext } from '../context/AuthContext'

type RutaProtegidaProps = {
  children: ReactNode
}

const RutaProtegida = ({ children }: RutaProtegidaProps) => {
  const { isAuthenticated, openLoginModal } = useAuthContext()
  const location = useLocation()

  if (!isAuthenticated) {
    openLoginModal()
    return <Navigate to="/" replace />
  }

  return children
}

export default RutaProtegida
