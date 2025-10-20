import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../services/services';

import sad_icon from '../assets/sad_icon.svg'

const DetalleProd = () => {
    const { id } = useParams();
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchProductByID = async () => {
            try {
                const data = await getProducts();
                if (data && Array.isArray(data)) {

                    const foundProduct = data.find(p => String(p.id) === id);
                    if (foundProduct) {
                        setProduct(foundProduct);
                    } else {
                        setError(true);
                    }
                } else {
                    setError(true);
                }
            } catch (err) {
                console.error('Error loading product:', err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchProductByID();
    }, [id]);

    if (loading) return <span style={{ height: '30vh', gridColumn: 'span 3' }}>Cargando el detalle del producto seleccionado...</span>
    if (error) return <p style={{ textAlign: 'center', height: '30vh', gridColumn: 'span 3' }}> <img src={sad_icon} alt="Sad icon" width={50} /><br />Hubo un problema al cargar el producto seleccionado.<br />Por favor, intenta más tarde</p>;


    return (
        <div>
            <h2>{id}</h2>

        </div>
    )
}

export default DetalleProd
