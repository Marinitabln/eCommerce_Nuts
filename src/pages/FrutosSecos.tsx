import ProductCard from '../components/productCard/ProductCard.js'
import { useProductsContext } from '../context/ProductContext.js'
import { filterProductsByCategory } from '../utils/filterProductsByategory.js'
import styles from '../App.module.css'

const FrutosSecos = () => {

    const { products, loading, error } = useProductsContext()
    const frutosSecos = filterProductsByCategory(products, 'frutos secos')

    if (loading) return <p>Cargando productos...</p>
    if (error) return <p>Error al cargar productos</p>

    return (
        <>
            <h1 className={styles.h1Category}>Frutos secos</h1>
           {
                frutosSecos.map((elem) =>
                    <ProductCard
                        key={elem.id}
                        category={elem.category}
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

export default FrutosSecos
