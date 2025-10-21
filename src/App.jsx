import { useState } from 'react'
import Cart from './components/cart/Cart'
import ProductsContainer from './components/productsContainer/ProductsContainer'
import LayoutGral from './components/layout/LayoutGral'
import styles from './App.module.css'


function App() {

  const [cart, setCart] = useState([])

  //Add product to cart
  const handleAddToCart = (productToCart) => {
    setCart((prevCart) => [...prevCart, productToCart])
  }

  //Clear cart
  const handleClearCart = () => {
    setCart([])
  }

  return (

    <LayoutGral>
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <ProductsContainer handleAddToCart={handleAddToCart} />
        </div>
        <div className={styles.sidebar}>
          <Cart cart={cart} handleClearCart={handleClearCart} />
        </div>

      </div>
    </LayoutGral>

  )
}

export default App
