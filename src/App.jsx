import './App.css'
import { useState } from 'react'
import Cart from './components/cart/Cart'
import ProductsContainer from './components/ProductsContainer/ProductsContainer'

const CART = [
  {
    product_title: "Nueces",
    presentation: "250gr",
    quantity: 2,
    unitPrice: "1000",
    totalPrice: "2000"
  },
  {
    product_title: "Pistachos",
    presentation: "500gr",
    quantity: 3,
    unitPrice: "1900",
    totalPrice: "5700"
  }
]

function App() {

  const [cart, setCart] = useState(CART)

  //Add product to cart
  const handleAddToCart = (productToCart) => {
    setCart([...cart, productToCart])
  }

  console.log(cart);


  //Clear cart
  const handleClearCart = () => {
    setCart([])
  }

  return (
    <>
      <ProductsContainer handleAddToCart={handleAddToCart} />
      <Cart cart={cart} handleClearCart={handleClearCart}  />
    </>
  )
}

export default App
