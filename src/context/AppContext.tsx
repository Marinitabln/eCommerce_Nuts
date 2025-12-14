import { createContext, useContext, useState, type ReactNode } from 'react'
import type { User } from '../types/user-type.js'
import type { CartItem } from '../types/product-type.js'



type AppContextType = {
    isAuthenticated: boolean
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
    user: User
    setUser: React.Dispatch<React.SetStateAction<User>>
    cart: CartItem[]
    handleAddToCart: (item: CartItem) => void
    handleClearCart: () => void
    handleClearProductById: (id: string) => void
    logout: () => void
}

export const AppContext = createContext<AppContextType | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState({ name: '', email: '' });


    const [cart, setCart] = useState<CartItem[]>([])

    //Add product to cart
      const handleAddToCart = (item: CartItem) => {
    setCart(prev => [...prev, item])
  }
    //Clear cart
    const handleClearCart = () => {
        setCart([])
    }

    //Clear product by Id 
    const handleClearProductById = (productId: string) => {
        setCart(prevCart => prevCart.filter(item => item.productId !== productId))
    }

    const logout = () => {
        setIsAuthenticated(false)
        setUser({ name: "", email: "" })
        handleClearCart()
    }

    const value = {
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
        logout,

        cart,
        setCart,
        handleAddToCart,
        handleClearCart,
        handleClearProductById

    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )

}

export function useAppContext() {
    const context = useContext(AppContext)
    if (!context) {
        throw new Error("useAppContext debe usarse dentro de AppProvider")
    }
    return context
}