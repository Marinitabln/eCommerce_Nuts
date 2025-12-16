import CreateProductForm from '../components/dashboard/CreateProductForm'
import styles from '../components/dashboard/Dashboard.module.css'

const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <h1>Dashboard</h1>
      <p>Bienvenido al panel de gestión</p>
      <CreateProductForm />
    </div>
  )
}

export default Dashboard
