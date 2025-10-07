import { useEffect, useState } from 'react'

import ProductCard from '../components/productCard/ProductCard'
import { getProducts } from '../services/services'

const Inicio = ({ handleAddToCart }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const productosAMostrar = [products[0],products[11],products[5], products[19],products[15],products[18]];

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts()
                if (data) {
                    setProducts(data)
                }
            } catch (error) {
                console.error('Error loading products:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchProducts()
    }, [])

    if (loading) return <span>Cargando productos...</span>

    return (
        <>
            {
                productosAMostrar &&
                productosAMostrar.map((elem, index) =>
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
