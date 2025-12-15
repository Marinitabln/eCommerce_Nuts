import ProductCard from '../components/productCard/ProductCard'
import Button from '../components/ui/Button'
import { useProductsContext } from '../context/ProductContext'
import styles from '../components/home/Inicio.module.css'
import { filterProductsByCategory } from '../utils/filterProductsByategory'
import { useMemo, useState } from 'react'
import { usePagination } from '../hooks/usePagination'

const ITEMS_PER_PAGE = 6;

const Inicio = () => {
    const { products, loading, error } = useProductsContext()
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

    const filteredProducts = useMemo(() => {
        if (!selectedCategory) return products
        return filterProductsByCategory(products, selectedCategory)
    }, [products, selectedCategory])


    const {
        currentItems,
        currentPage,
        totalPages,
        nextPage,
        prevPage,
    } = usePagination(filteredProducts, ITEMS_PER_PAGE);



    if (loading) return <p>Cargando productos...</p>
    if (error) return <p>Error al cargar productos</p>


    return (
        <>
            <section className={styles.categoryFilters}>
                <Button onClick={() => setSelectedCategory('cereales')} text="Cereales" variant={selectedCategory === 'cereales' ? 'fill' : 'secondary'} />
                <Button onClick={() => setSelectedCategory('semillas')} text="Semillas" variant={selectedCategory === 'semillas' ? 'fill' : 'secondary'} />
                <Button onClick={() => setSelectedCategory('frutos secos')} text="Frutos Secos" variant={selectedCategory === 'frutos secos' ? 'fill' : 'secondary'} />
                <Button onClick={() => setSelectedCategory('productos envasados')} text="Productos Envasados" variant={selectedCategory === 'productos envasados' ? 'fill' : 'secondary'} />
            </section>
            {selectedCategory && <p className={styles.clearFilters} onClick={() => setSelectedCategory(null)}>X Borrar filtros</p>}
            {currentItems.map(elem => (
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

            {/* Controles de paginación */}
            <div className={styles.paginationControls}>
                <Button onClick={prevPage} text="Anterior" variant="simple" />
                <span >
                    {currentPage} / {totalPages}
                </span>
                <Button onClick={nextPage} text="Siguiente" variant="simple" />
            </div>
        </>
    )
}

export default Inicio