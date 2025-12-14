import ProductCard from '../components/productCard/ProductCard'
import { useProductsContext } from '../context/ProductContext'

const Inicio = () => {
    const { products, loading, error } = useProductsContext()

    const productosAMostrar = [
        products[0],
        products[11],
        products[5],
        products[19],
        products[15],
        products[18],
    ].filter(Boolean)

    if (loading) return <p>Cargando productos...</p>
    if (error) return <p>Error al cargar productos</p>

    return (
        <>
            {productosAMostrar.map(elem => (
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
                />
            ))}
        </>
    )
}

export default Inicio