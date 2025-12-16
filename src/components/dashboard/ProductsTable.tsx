import { useEffect, useState } from 'react'
import { ProductType } from '../../types/product-type'
import {
    deleteProduct,
    getProducts
} from '../../services/services'
import EditProductModal from './EditProductModal'
import styles from './ProductTable.module.css'
import { BiPencil, BiPlus } from 'react-icons/bi'
import { BsTrash2 } from 'react-icons/bs'
import Button from '../ui/Button'

type Props = {
    onAddProduct: () => void
}

function ProductsTable({ onAddProduct }: Props) {
    const [products, setProducts] = useState<ProductType[]>([])
    const [editingId, setEditingId] = useState<string | null>(null)

    const fetchProducts = async () => {
        const data = await getProducts()
        setProducts(data)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    const handleDelete = async (id: string) => {
        if (!confirm('¿Eliminar producto?')) return
        await deleteProduct(id)
        fetchProducts()
    }

    return (
        <section className={styles.dashboardTableContainer}>
            <div className={styles.tableHeader}>
                <h2>Productos</h2>
                <Button onClick={onAddProduct} text="Crear producto" variant='fill' />
            </div>

            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Categoría</th>
                            <th>Presentaciones</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {products.map(product => (
                            <tr key={product.id}>
                                <td data-label="Nombre">{product.product_name}</td>
                                <td data-label="Categoría">{product.category}</td>
                                <td data-label="Presentaciones">
                                    {product.presentations.join(', ')}
                                </td>
                                <td className={styles.actions}>
                                    <BiPencil
                                        size={18}
                                        onClick={() => setEditingId(product.id)}
                                    />
                                    <BsTrash2
                                        size={18}
                                        onClick={() => handleDelete(product.id)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {editingId && (
                <EditProductModal
                    productId={editingId}
                    onClose={() => setEditingId(null)}
                    onUpdated={() => {
                        setEditingId(null)
                        fetchProducts()
                    }}
                />
            )}
        </section>
    )
}

export default ProductsTable
