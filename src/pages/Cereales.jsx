import { useState } from 'react'
import { PRODUCTS } from '../data/constants'
import ProductCard from '../components/productCard/ProductCard'

const Cereales = ({ handleAddToCart }) => {

    const [products, setProducts] = useState(PRODUCTS)
    return (
        <>
        <h1>Cereales</h1>
            {
                products.map((elem, index) =>
                    <ProductCard
                        key={index}
                        img={elem.url_img}
                        product_name={elem.product_name}
                        description={elem.description}
                        presentations={elem.presentations}
                        prices={elem.price}
                        handleAddToCart={handleAddToCart} />)
            }
        </>
    )
}

export default Cereales