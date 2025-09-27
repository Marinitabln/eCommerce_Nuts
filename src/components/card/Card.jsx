import React from 'react'
import styles from './Card.module.css'

const Card = ({img, title, description, price}) => {
  return (
    <div className={styles.card}>
      <img src={img} alt={title} className={styles.card_img}/>
      <h2 className={styles.card_title}>{title}</h2>
      <p className={styles.card_description}>{description}</p>
      <div className={styles.card_quantity}>
        <label htmlFor="quantity">Tamaño:</label>
        <select name="quantity" id="quantity">
          <option value="1">250gr</option>
          <option value="2">500gr</option>
          <option value="3">1kg</option>
        </select>
        </div>
      <span className={styles.card_price}>{price}</span>  
      <button>Agregar</button>
    </div>
  )
}

export default Card
