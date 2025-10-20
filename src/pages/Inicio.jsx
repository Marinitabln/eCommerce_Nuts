import { useEffect, useState } from 'react'

import ProductCard from '../components/productCard/ProductCard'
import { getProducts } from '../services/services'

import sad_icon from '../assets/sad_icon.svg'

const Inicio = ({ handleAddToCart }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false);

    //Para mostrar sólo 6 productos de la api, hasta hacer la paginación
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
                setError(true);
            } finally {
                setLoading(false)
            }
        }
        fetchProducts()
    }, [])

    if (loading) return <span style={{height: '30vh', gridColumn: 'span 3'}}>Cargando productos...</span>
    if (error) return <p style={{textAlign: 'center', height: '30vh', gridColumn: 'span 3'}}> <img src={sad_icon} alt="Sad icon" width={50}/><br />Hubo un problema al cargar los productos.<br />Por favor, intenta más tarde</p>;

    return (
        <>
            { 
                productosAMostrar &&
                productosAMostrar.map((elem) =>                    
                    <ProductCard
                        key={elem.id}
                        id={elem.id}
                        img={elem.url_img}
                        product_name={elem.product_name}
                       /*  description={elem.description} */
                        presentations={elem.presentations}
                        prices={elem.price}
                        handleAddToCart={handleAddToCart} />)
            }
        </>
    )
}

export default Inicio
