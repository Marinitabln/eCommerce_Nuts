import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../services/services.js';
import ProductCardDetail from '../components/productCard/ProductCardDetail.js'
import { ProductType } from '../types/product-type.js';


const DetalleProd = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<ProductType | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchProductByID = async () => {
            try {
                const data = await getProducts()

                if (Array.isArray(data)) {
                    const foundProduct = data.find(
                        (p: ProductType) => String(p.id) === id
                    )

                    foundProduct ? setProduct(foundProduct) : setError(true)
                } else {
                    setError(true)
                }
            } catch {
                setError(true)
            } finally {
                setLoading(false)
            }
        }

        fetchProductByID()
    }, [id])

    if (loading) return <span style={{ height: '30vh', gridColumn: 'span 3' }}>Cargando el detalle del producto seleccionado...</span>;
    if (error) return <p style={{ textAlign: 'center', height: '30vh', gridColumn: 'span 3' }}> <img src="/sad_icon.svg" alt="Sad icon" width={50} /><br />Hubo un problema al cargar el producto seleccionado.<br />Por favor, intenta más tarde</p>;


    return (
        <>
            {product && <ProductCardDetail
                id={product.id}
                img={product.url_img}
                product_name={product.product_name}
                description={product.description}
                presentations={
                    Array.isArray(product.presentations)
                        ? product.presentations
                        : [product.presentations]
                }
                prices={product.price}
            />}
        </>
    )
}

export default DetalleProd
