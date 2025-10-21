'use client'
import { useEffect, useState } from 'react'
import styles from './ProductCardDetail.module.css'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import Button from '../ui/Button'
import { useNavigate } from 'react-router-dom'



const ProductCardDetail = ({ id, category, img, product_name, description, presentations, prices, handleAddToCart }) => {

  const [quantity, setQuantity] = useState(1)
  const [presentation, setPresentation] = useState(presentations[0])
  const [price, setPrice] = useState(prices[0])
  const [subtotal, setSubtotal] = useState(prices[0])

  const navigate = useNavigate()

  //Manejar cantidad
  const decreaseQuantity = () => {
    setQuantity((quantity) => Math.max(0, quantity - 1))
  }
  const increaseQuantity = () => {
    setQuantity((quantity) => quantity + 1)
  }

  //Manejar presentacion
  const handlePresentation = (e) => {
    const selectedPresentation = e.target.value
    const index = presentations.indexOf(selectedPresentation)
    setPresentation(selectedPresentation)
    setPrice(prices[index])
  }

  // Manejar envío de form
  const handleProductToCart = (e) => {
    e.preventDefault()

    const productToCart = {
      product_name,
      presentation,
      quantity,
      unitPrice: price,
      subtotal
    }

    console.log("Producto agregado:", productToCart)
    handleAddToCart(productToCart)
    setQuantity(1);
  }

  //Manejar redirección a Inicio
  const handleBack = ()=>{
   navigate(`/`)
  }

  useEffect(() => {
    setSubtotal(Number(quantity) * Number(price))
  }, [quantity, price])


  return (
    <div className={styles.card}>
      <img src={img} alt={product_name} className={styles.card_img} />
      <div>
      <h2 className={styles.card_title}>{product_name}</h2>
      <p className={styles.card_description}>{description}</p>
      <form onSubmit={handleProductToCart}>
        <div className={styles.card_presentation}>
          <label htmlFor="presentation">Tamaño:</label>
          <select name="presentation" id="presentation" onChange={handlePresentation}>
            {presentations.map((presentation, index) => (
              <option key={index} value={presentation}>{presentation}</option>
            ))}
          </select>
        </div>
        <span className={styles.card_price}>${price}</span>
        <div className={styles.card_quantity_subtotal}>
          <span className={styles.card_quantity}>
            <AiOutlineMinusCircle onClick={decreaseQuantity} />
            <span>{quantity}</span>
            <AiOutlinePlusCircle onClick={increaseQuantity} />
          </span>
          {quantity > 1 ? `Subtotal: $${subtotal}` : ""}
        </div>
        <Button type="submit" text="Agregar" variant="primary" />
        <Button type="button" text="Volver" variant="secondary" onClick={handleBack}/>
      </form>
      </div>
    </div>
  )
}

export default ProductCardDetail
