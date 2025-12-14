import Cart from './components/cart/Cart'
import ProductsContainer from './components/productsContainer/ProductsContainer'
import LayoutGral from './components/layout/LayoutGral'
import styles from './App.module.css'
import {  AppProvider } from './context/AppContext.js'
import { ProductsProvider } from './context/ProductContext'


function App() {
  return (
    <AppProvider>
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
    </AppProvider>
  )
}
export default App
