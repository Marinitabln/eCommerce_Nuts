import { useState } from 'react'
import { PRODUCTS } from '../data/constants'

import ProductCard from '../components/productCard/ProductCard'

const Inicio = ({ handleAddToCart }) => {

    const [products, setProducts] = useState(PRODUCTS)
    return (
        <>
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

export default Inicio
