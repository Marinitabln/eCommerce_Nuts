import { Routes, Route } from 'react-router-dom'
import Cart from './components/cart/Cart'
import LayoutGral from './components/layout/LayoutGral'
import ProductsContainer from './components/productsContainer/ProductsContainer'
import { CartProvider } from './context/CartContext'
import { ProductsProvider } from './context/ProductContext'
import { AuthProvider } from './context/AuthContext'
import styles from './App.module.css'
import { useLocation } from 'react-router-dom'
import RutaProtegida from './pages/RutaProtegida'
import Dashboard from './pages/Dashboard'
import Pagar from './pages/Pagar'

function App() {
  const location = useLocation()
  const isCheckout = location.pathname.startsWith('/pagar')
  const isDashboard = location.pathname.startsWith('/dashboard')

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
                        <Pagar />
                      </RutaProtegida>
                    }
                  />
                  <Route
                    path="/dashboard"
                    element={
                      <RutaProtegida>
                        <Dashboard />
                      </RutaProtegida>
                    }
                  />
                </Routes>
              </div>

              {!isCheckout && !isDashboard && (
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
