import { Navigate, useLocation } from 'react-router-dom'
import type { ReactNode } from 'react'
import { useAuthContext } from '../context/AuthContext'
import { useEffect } from 'react'

type RutaProtegidaProps = {
  children: ReactNode
}

const RutaProtegida = ({ children }: RutaProtegidaProps) => {
  const { isAuthenticated, openLoginModal } = useAuthContext()
  const location = useLocation()

  useEffect(() => {
    if (!isAuthenticated) {
      openLoginModal()
    }
  }, [isAuthenticated, openLoginModal])

  if (!isAuthenticated) {
    return <Navigate to="/" replace state={{ from: location }} />
  }

  return children
}

export default RutaProtegida
