'use client'
import { useContext, useEffect, useState } from 'react'
import styles from './ProductCard.module.css'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'

import { useNavigate } from 'react-router-dom'
import Button from '../ui/Button'
import { useCartContext } from '../../context/CartContext'
import { CartItem, ProductType } from '../../types/product-type'


const ProductCard = ({ id, category, url_img, product_name, description, presentations, price }: ProductType) => {

  const { handleAddToCart } = useCartContext()

  const [quantity, setQuantity] = useState(1)
  const [presentation, setPresentation] = useState(presentations[0])
  const [unitPrice, setUnitPrice] = useState(price[0])
  const [subtotal, setSubtotal] = useState(price[0])

  const presentationId = `presentation-${id}`

  const navigate = useNavigate()

  //Manejar cantidad
  const decreaseQuantity = () => {
    setQuantity((quantity) => Math.max(0, quantity - 1))
  }
  const increaseQuantity = () => {
    setQuantity((quantity) => quantity + 1)
  }

  //Manejar presentacion
  const handlePresentation = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPresentation = e.target.value
    const index = presentations.indexOf(selectedPresentation)
    setPresentation(selectedPresentation)
    setUnitPrice(price[index])
  }

  // Manejar envío de form
  const handleProductToCart = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const productToCart: CartItem = {
      productId: id,
      product_name,
      presentation,
      quantity,
      unitPrice,
      subtotal
    }

    handleAddToCart(productToCart)
    setQuantity(1)
  }

  //Manejar redirección a Detalle
  const handleDetail = () => {
    navigate(`/${category}/${id}`)
  }

  useEffect(() => {
    setSubtotal(quantity * unitPrice)
  }, [quantity, unitPrice])


  return (
    <div className={styles.card}>
      <div className={styles.card_img_wrapper}>
        <img src={url_img} alt={product_name} className={styles.card_img} />
      </div>
      <h2 className={styles.card_title}>{product_name}</h2>
      <p className={styles.card_description}>{description}</p>
      <form onSubmit={handleProductToCart}>
        <div className={styles.card_presentation}>
          <label htmlFor={presentationId}>Tamaño:</label>
          <select name="presentation" id={presentationId} onChange={handlePresentation}>
            {presentations.map((presentation, index) => (
              <option key={index} value={presentation}>{presentation}</option>
            ))}
          </select>
        </div>
        <span className={styles.card_price}>${unitPrice}</span>
        <div className={styles.card_quantity_subtotal}>
          <span className={styles.card_quantity}>
            <AiOutlineMinusCircle onClick={decreaseQuantity} />
            <span>{quantity}</span>
            <AiOutlinePlusCircle onClick={increaseQuantity} />
          </span>
          {quantity > 1 ? `Subtotal: $${subtotal}` : ""}
        </div>
        <Button type="submit" text="Agregar" variant="primary" />
        <Button type="button" text="Ver detalle" variant="secondary" onClick={handleDetail} />
      </form>
    </div>
  )
}

export default ProductCard
