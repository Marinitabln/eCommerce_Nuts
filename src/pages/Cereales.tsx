
import ProductCard from '../components/productCard/ProductCard.js'
import { useProductsContext } from '../context/ProductContext.js'
import { filterProductsByCategory } from '../utils/filterProductsByategory.js'

const Cereales = () => {
    
    const { products, loading, error } = useProductsContext()
    const cereales = filterProductsByCategory(products, 'cereales')

    if (loading) return <p>Cargando productos...</p>
    if (error) return <p>Error al cargar productos</p>

    return (
        <>
            <h1>Cereales</h1>
            {
                cereales.map((elem) =>
                    <ProductCard
                        key={elem.id}
                        id={elem.id}
                        url_img={elem.url_img}
                        product_name={elem.product_name}
                        description={elem.description}
                        presentations={
                            Array.isArray(elem.presentations)
                                ? elem.presentations
                                : [elem.presentations]
                        }
                        price={elem.price}
                    />)
            }
        </>
    )
}

export default Cereales