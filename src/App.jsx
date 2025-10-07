import './App.css'
import { useState } from 'react'
import Cart from './components/cart/Cart'
import ProductsContainer from './components/ProductsContainer/ProductsContainer'
import LayoutGral from './components/layout/LayoutGral'

const CART = [
  {
    product_name: "Nueces",
    presentation: "250gr",
    quantity: 2,
    unitPrice: "1000",
    subtotal: "2000"
  },
  {
    product_name: "Pistachos",
    presentation: "500gr",
    quantity: 3,
    unitPrice: "1900",
    subtotal: "5700"
  }
]

function App() {

  const [cart, setCart] = useState([])

  //Add product to cart
  const handleAddToCart = (productToCart) => {
    setCart((prevCart)=>[...prevCart, productToCart])
  }

/*   console.log(cart); */

  //Clear cart
  const handleClearCart = () => {
    setCart([])
  }

  return (

    <LayoutGral>
      <ProductsContainer handleAddToCart={handleAddToCart} />
      <Cart cart={cart} handleClearCart={handleClearCart} />
    </LayoutGral>

  )
}

export default App
