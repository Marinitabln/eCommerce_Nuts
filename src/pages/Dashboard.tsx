import { useState } from 'react'
import CreateProductForm from '../components/dashboard/CreateProductForm'
import ProductsTable from '../components/dashboard/ProductsTable'
import styles from '../components/dashboard/Dashboard.module.css'

const Dashboard = () => {
  const [showCreate, setShowCreate] = useState(false)

  return (
    <div className={styles.dashboardContainer}>
      <h1>Dashboard</h1>
      <p>Bienvenido al panel de gestión</p>

      {showCreate ? (
        <CreateProductForm onCancel={() => setShowCreate(false)} />
      ) : (
        <ProductsTable onAddProduct={() => setShowCreate(true)} />
      )}
    </div>
  )
}

export default Dashboard
