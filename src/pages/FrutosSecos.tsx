import ProductCard from '../components/productCard/ProductCard.js'
import { useAppContext } from '../context/AppContext.js'
import { useProductsContext } from '../context/ProductContext.js'

const FrutosSecos = () => {

    const { handleAddToCart } = useAppContext()
    const { products } = useProductsContext()

    return (
        <>
            <h1>Frutos secos</h1>
           {
                products.map((elem) =>
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

export default FrutosSecos
