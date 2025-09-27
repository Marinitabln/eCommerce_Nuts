import {useState} from 'react'
import Card from '../card/Card'
import {PRODUCTS} from '../../data/constants'
import styles from './CardContainer.module.css'


const CardContainer = () => {

 const [products, setProducts] = useState(PRODUCTS)

  return (
    <section className={styles.cardContainer}>
      {
        products.map((elem, index) =>
          <Card key={index} img={elem.url_img} title={elem.title} description={elem.description} price={elem.price} />)
      }
   </section>
  )
}

export default CardContainer
