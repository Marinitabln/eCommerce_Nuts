import { createContext, useContext, useEffect, useState } from 'react'
import { loginService } from '../services/auth-service'
import type { User } from '../types/user-type'
import { useCartContext } from './CartContext'
import { Navigate, useNavigate } from 'react-router-dom'

type AuthContextType = {
  user: User | null
  setUser: (user: User | null) => void
  isAuthenticated: boolean
  setIsAuthenticated: (value: boolean) => void
  authLoading: boolean
  login: ( email: string, password: string) => Promise<void>
  logout: () => void
  isLoginModalOpen: boolean
  openLoginModal: () => void
  closeLoginModal: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [authLoading, setAuthLoading] = useState(false)

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  const { handleClearCart } = useCartContext()

  const openLoginModal = () => setIsLoginModalOpen(true)
  const closeLoginModal = () => setIsLoginModalOpen(false)

  const navigate = useNavigate()

  const login = async (email: string, password: string) => {
    setAuthLoading(true)
    try {
      const user = await loginService(email, password)
      setUser(user)
      setIsAuthenticated(true)
      localStorage.setItem('auth', JSON.stringify(user))
    } catch (error) {
      setIsAuthenticated(false)
      throw error
    } finally {
      setAuthLoading(false)
    }
  }
  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem('auth')
    handleClearCart()
    navigate('/')
  }

  useEffect(() => {
    const stored = localStorage.getItem('auth')
    if (stored) {
      setUser(JSON.parse(stored))
      setIsAuthenticated(true)
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        setIsAuthenticated,
        authLoading,
        login,
        logout,
        isLoginModalOpen,
        openLoginModal,
        closeLoginModal
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error('useAuth debe usarse dentro de AuthProvider')
  }
  return ctx
}
