import Cart from './components/cart/Cart'
import ProductsContainer from './components/productsContainer/ProductsContainer'
import LayoutGral from './components/layout/LayoutGral'
import styles from './App.module.css'
import { CartProvider } from './context/CartContext'
import { ProductsProvider } from './context/ProductContext'
import { AuthProvider } from './context/AuthContext'



function App() {


  return (
    <CartProvider>
      <AuthProvider>
        <ProductsProvider>
          <LayoutGral>
            <div className={styles.container}>
              <div className={styles.mainContent}>
                <ProductsContainer />
              </div>
              <div className={styles.sidebar}>
                <Cart />
              </div>
            </div>
          </LayoutGral>
        </ProductsProvider>
      </AuthProvider>
    </CartProvider>
  )
}
export default App
