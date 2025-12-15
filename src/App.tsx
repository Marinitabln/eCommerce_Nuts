import { Routes, Route } from 'react-router-dom'
import Cart from './components/cart/Cart'
import LayoutGral from './components/layout/LayoutGral'
import ProductsContainer from './components/productsContainer/ProductsContainer'
import Checkout from './components/checkout/Checkout'
import { CartProvider } from './context/CartContext'
import { ProductsProvider } from './context/ProductContext'
import { AuthProvider } from './context/AuthContext'
import styles from './App.module.css'
import { useLocation } from 'react-router-dom'
import RutaProtegida from './pages/RutaProtegida'

function App() {
  const location = useLocation()
  const isCheckout = location.pathname.startsWith('/pagar')

  return (
    <CartProvider>
      <AuthProvider>
        <ProductsProvider>
          <LayoutGral>
            <div className={styles.container}>
              <div className={styles.mainContent}>
                <Routes>
                  <Route path="/*" element={<ProductsContainer />} />

                  <Route
                    path="/pagar"
                    element={
                      <RutaProtegida>
                        <Checkout />
                      </RutaProtegida>
                    }
                  />
                </Routes>
              </div>

              {!isCheckout && (
                <div className={styles.sidebar}>
                  <Cart />
                </div>
              )}
            </div>
          </LayoutGral>
        </ProductsProvider>
      </AuthProvider>
    </CartProvider>
  )
}

export default App
