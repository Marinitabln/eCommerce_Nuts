import styles from './ProductsContainer.module.css'
import { Route, Routes } from 'react-router-dom'
import Inicio from '../../pages/Inicio'
import FrutosSecos from '../../pages/FrutosSecos'
import Semillas from '../../pages/Semillas'
import ProdEnvasados from '../../pages/Prod.Envasados'
import Cereales from '../../pages/Cereales'
import DetalleProd from '../../pages/DetalleProd'


const ProductsContainer = ({ handleAddToCart }) => {



  return (
    <section className={styles.cardContainer}>
      <Routes>
        <Route path='/' element={<Inicio handleAddToCart={handleAddToCart} />} />
        <Route path='/cereales' element={<Cereales handleAddToCart={handleAddToCart} />} />
        <Route path='/frutos_secos' element={<FrutosSecos handleAddToCart={handleAddToCart} />} />
        <Route path='/semillas' element={<Semillas handleAddToCart={handleAddToCart} />} />
        <Route path='/prod_envasados' element={<ProdEnvasados handleAddToCart={handleAddToCart} />} />
        <Route path='/:id' element={<DetalleProd />} />
      </Routes>

    </section>
  )
}

export default ProductsContainer
