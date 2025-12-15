import styles from './ProductsContainer.module.css'
import { Route, Routes } from 'react-router-dom'
import Inicio from '../../pages/Inicio.js'
import FrutosSecos from '../../pages/FrutosSecos.js'
import Semillas from '../../pages/Semillas.js'
import ProdEnvasados from '../../pages/Prod.Envasados.js'
import Cereales from '../../pages/Cereales.js'
import DetalleProd from '../../pages/DetalleProd.js'
import RutaProtegida from '../../pages/RutaProtegida.js'
import Pagar from '../../pages/Pagar.js'


const ProductsContainer = () => {


  return (
    <section className={styles.cardContainer}>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/cereales' element={<Cereales />} />
        <Route path='/frutos_secos' element={<FrutosSecos  />} />
        <Route path='/semillas' element={<Semillas  />} />
        <Route path='/prod_envasados' element={<ProdEnvasados  />} />
        <Route path='/:category/:id' element={<DetalleProd />} />
      </Routes>

    </section>
  )
}

export default ProductsContainer
