import {useState} from 'react'
import Card from '../productCard/ProductCard'
import {PRODUCTS} from '../../data/constants'
import styles from './ProductsContainer.module.css'


const ProductsContainer = () => {

 const [products, setProducts] = useState(PRODUCTS)

  return (
    <section className={styles.cardContainer}>
      {
        products.map((elem, index) =>
          <Card key={index} img={elem.url_img} title={elem.title} description={elem.description} presentations={elem.presentations} prices={elem.price} />)
      }
   </section>
  )
}

export default ProductsContainer
