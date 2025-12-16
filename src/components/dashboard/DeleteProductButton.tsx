import { deleteProduct } from '../../services/services'
import Button from '../ui/Button'

function DeleteProductButton({ id }: { id: string }) {
  const handleDelete = async () => {
    if (!confirm('¿Eliminar producto?')) return

    try {
      await deleteProduct(id)
      alert('Producto eliminado')
    } catch {
      alert('Error al eliminar')
    }
  }

  return (
    <Button
      variant="danger"
      text="Eliminar producto"
      onClick={handleDelete}
    />
  )
}

export default DeleteProductButton
