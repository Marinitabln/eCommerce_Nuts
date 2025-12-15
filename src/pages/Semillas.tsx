import ProductCard from '../components/productCard/ProductCard.js'
import { useCartContext } from '../context/CartContext.js'
import { useProductsContext } from '../context/ProductContext.js'

const Semillas = () => {

    const { products } = useProductsContext()

    return (
        <>
            <h1>Semillas</h1>
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

export default Semillas
