import React, { useEffect, useState } from 'react'
import styles from './ProductCard.module.css'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'


const ProductCard = ({ img, title, description, presentations, prices, handleAddToCart }) => {

  const [quantity, setQuantity] = useState(1)
  const [presentation, setPresentation] = useState(presentations[0])
  const [price, setPrice] = useState(prices[0])
  const initialProduct = {
    product_title: title,
    presentation: "",
    quantity: 1,
    unitPrice: price,
    totalPrice: ""
  }

  console.log(initialProduct);
  const [productToCart, setProductToCart] = useState(initialProduct);
  const [subtotal, setSubtotal] = useState()
  


  //Handle quantity
  const decreaseQuantity = () => {
    setQuantity((quantity) => Math.max(0, quantity - 1))
  }
  const increaseQuantity = () => {
    setQuantity((quantity) => quantity + 1)
  }

  //Handle presentation
  const handlePresentation = (e) => {
    console.log(e.target.value);
    setPresentation(e.target.value)
    setPrice(prices[e.target.value])
  }

  //handle productToCart and addProductToCart
  const handleProductToCart = () => {
    console.log(productToCart);

    setQuantity(quantity)
    
    setProductToCart(...productToCart, presentation = { presentation }, quantity = { quantity }, totalPrice = { totalPrice })
  }

  useEffect(()=>{
    console.log(quantity, price);
    
    setSubtotal(Number(quantity) * Number(price))
  },[quantity])


  return (
    <div className={styles.card}>
      <img src={img} alt={title} className={styles.card_img} />
      <h2 className={styles.card_title}>{title}</h2>
      <p className={styles.card_description}>{description}</p>

      <div className={styles.card_presentation}>
        <label htmlFor="presentation">Tamaño:</label>
        <select name="presentation" id="presentation" onChange={handlePresentation}>
          {presentations.map((presentation, index) => (
            <option key={index} value={index}>{presentation}</option>
          ))}
        </select>
      </div>
      <span className={styles.card_price}>${price}</span>
      <span className={styles.card_quantity}>
        <AiOutlineMinusCircle onClick={decreaseQuantity} />
        <span>{quantity}</span>
        <AiOutlinePlusCircle onClick={increaseQuantity} />
      </span>
        {quantity > 1 ? `Subtotal: $${subtotal}` : ""}
      <button onClick={handleProductToCart}>Agregar</button>
    </div>
  )
}

export default ProductCard
