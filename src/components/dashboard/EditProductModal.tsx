import styles from './Dashboard.module.css'
import EditProductForm from './EditProductForm'

type Props = {
  productId: string
  onClose: () => void
  onUpdated?: () => void
}

function EditProductModal({ productId, onClose, onUpdated }: Props) {
    
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>

        <EditProductForm
          productId={productId}
          onUpdated={onUpdated}
        />
      </div>
    </div>
  )
}

export default EditProductModal
