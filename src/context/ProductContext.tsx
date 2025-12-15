import { createContext, useContext, useEffect, useState } from 'react'
import { getProducts } from '../services/services'
import type { ProductType } from '../types/product-type'

type ProductsContextType = {
  products: ProductType[]
  loading: boolean
  error: boolean
}

const ProductsContext = createContext<ProductsContextType | null>(null)

export function ProductsProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<ProductType[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts()
        setProducts(data)
      } catch (err) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return (
    <ProductsContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductsContext.Provider>
  )
}

export function useProductsContext() {
  const context = useContext(ProductsContext)
  if (!context) {
    throw new Error('useProducts debe usarse dentro de ProductsProvider')
  }
  return context
}
