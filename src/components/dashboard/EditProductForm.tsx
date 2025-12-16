import { useEffect, useState } from 'react'
import { ProductType } from '../../types/product-type'
import Button from '../ui/Button'
import styles from './CreateProductForm.module.css'
import { getProductById, updateProduct } from '../../services/services'

type Props = {
    productId: string,
    onUpdated?: () => void
}

function EditProductForm({ productId, onUpdated }: Props) {
    const [product, setProduct] = useState<ProductType | null>(null)
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getProductById(productId)
            .then(setProduct)
            .catch(() => alert('Error al cargar producto'))
    }, [productId])

    if (!product) return <p>Cargando...</p>

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setProduct(prev => prev && { ...prev, [name]: value })
    }

    const handlePresentationChange = (
        index: number,
        field: 'presentation' | 'price',
        value: string
    ) => {
        setProduct(prev => {
            if (!prev) return prev

            const presentations = [...prev.presentations]
            const price = [...prev.price]

            field === 'presentation'
                ? (presentations[index] = value)
                : (price[index] = Number(value))

            return { ...prev, presentations, price }
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        const { id, ...productBase } = product

        try {
            await updateProduct(id, productBase)
            alert('Producto actualizado')
            onUpdated?.()
        } catch {
            alert('Error al actualizar')
        } finally {
            setLoading(false)
        }
    }
    return (
        <form onSubmit={handleSubmit} className={styles.formCreate}>
            <h2>Editar producto</h2>
            <label>Nombre del producto</label>
            <input
                name="product_name"
                value={product.product_name}
                onChange={handleChange}
            />
            <label>Descripción</label>
            <textarea
                name="description"
                value={product.description}
                onChange={handleChange}
            />

            {product.presentations.map((p, i) => (
                <div key={i}>
                    <label>Presentación {i + 1}</label>
                    <input
                        value={p}
                        onChange={e =>
                            handlePresentationChange(i, 'presentation', e.target.value)
                        }
                    />
                    <label>Precio {i + 1}</label>
                    <input
                        type="number"
                        value={product.price[i]}
                        onChange={e =>
                            handlePresentationChange(i, 'price', e.target.value)
                        }
                    />
                </div>
            ))}

            <Button
                type="submit"
                text={loading ? 'Guardando...' : 'Guardar cambios'}
                variant="fill"
            />
        </form>
    )
}

export default EditProductForm
