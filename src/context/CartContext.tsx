import { createContext, useContext, useState, type ReactNode } from 'react'
import type { CartItem } from '../types/product-type.js'



type CartContextType = {

    cart: CartItem[]
    totalCart: number
    totalItems: number
    handleAddToCart: (item: CartItem) => void
    handleClearCart: () => void
    handleClearProductById: (id: string, presentation: string) => void

}

export const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {


    const [cart, setCart] = useState<CartItem[]>([])

    const totalCart = cart.reduce(
        (acc, item) => acc + item.subtotal,
        0
    )

    const totalItems = cart.reduce(
        (acc, item) => acc + item.quantity,
        0
    )

    //Add product to cart
    const handleAddToCart = (item: CartItem) => {
        setCart(prevCart => {
            const existingItemIndex = prevCart.findIndex(
                cartItem =>
                    cartItem.productId === item.productId &&
                    cartItem.presentation === item.presentation
            )

            if (existingItemIndex !== -1) {
                return prevCart.map((cartItem, index) =>
                    index === existingItemIndex
                        ? {
                            ...cartItem,
                            quantity: cartItem.quantity + item.quantity,
                            subtotal:
                                (cartItem.quantity + item.quantity) * cartItem.unitPrice
                        }
                        : cartItem
                )
            }

            return [...prevCart, item]
        })
    }

    //Clear cart
    const handleClearCart = () => {
        setCart([])
    }

    //Clear product by Id 
    const handleClearProductById = (id: string, presentation: string) => {
        setCart(prevCart =>
            prevCart.filter(
                item => !(item.productId === id && item.presentation === presentation)
            )
        )
    }

    const value = {
        cart,
        totalCart,
        totalItems,
        setCart,
        handleAddToCart,
        handleClearCart,
        handleClearProductById,
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )

}

export function useCartContext() {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error("useCartContext debe usarse dentro de CartProvider")
    }
    return context
}