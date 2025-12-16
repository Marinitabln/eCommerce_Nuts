import { useState } from 'react'
import type { ProductBase } from '../../types/product-type'
import Button from '../ui/Button'
import styles from './CreateProductForm.module.css'
import { postProducts } from '../../services/services'
import { useNavigate } from 'react-router-dom'

type FormErrors = {
  product_name?: string
  description?: string
  category?: string
  url_img?: string
  presentations?: string
  price?: string
}

const initialProduct: ProductBase = {
  product_name: '',
  description: '',
  url_img: '',
  category: '',
  presentations: [''],
  price: [0]
}

function CreateProductForm({ onCancel }: { onCancel?: () => void }) {
  const [product, setProduct] = useState<ProductBase>(initialProduct)
  const [errors, setErrors] = useState<FormErrors>({})
  const [loading, setLoading] = useState(false)

  const [hasSubmitted, setHasSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    setProduct(prev => ({
      ...prev,
      [name]: value
    }))

    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }


  const handlePresentationChange = (
    index: number,
    field: 'presentation' | 'price',
    value: string
  ) => {
    setProduct(prev => {
      const presentations = [...prev.presentations]
      const price = [...prev.price]

      if (field === 'presentation') {
        presentations[index] = value
      } else {
        price[index] = Number(value)
      }

      return { ...prev, presentations, price }
    })
  }

  const addPresentation = () => {
    setProduct(prev => ({
      ...prev,
      presentations: [...prev.presentations, ''],
      price: [...prev.price, 0]
    }))
  }

  const deletePresentation = (index?: number) => {
    setProduct(prev => {
      // no permitir eliminar la última
      if (prev.presentations.length === 1) return prev

      if (index === undefined) {
        return {
          ...prev,
          presentations: prev.presentations.slice(0, -1),
          price: prev.price.slice(0, -1)
        }
      }

      return {
        ...prev,
        presentations: prev.presentations.filter((_, i) => i !== index),
        price: prev.price.filter((_, i) => i !== index)
      }
    })
  }

  const validateForm = () => {
    const newErrors: FormErrors = {}

    if (!product.product_name.trim()) {
      newErrors.product_name = 'El nombre es obligatorio'
    }

    if (product.description.length < 10) {
      newErrors.description = 'Mínimo 10 caracteres'
    }

    if (!product.category.trim()) {
      newErrors.category = 'La categoría es obligatoria'
    }

    if (!product.url_img.trim()) {
      newErrors.url_img = 'La imagen es obligatoria'
    }

    if (
      product.presentations.some(p => !p.trim()) ||
      product.price.some(p => p <= 0)
    ) {
      newErrors.presentations =
        'Todas las presentaciones deben tener nombre y precio válido'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setLoading(true)

    try {
      await postProducts(product)
      console.log('Producto creado correctamente')
      setProduct(initialProduct)
      setErrors({})
    } catch (error) {
      alert('Error al crear el producto')
    } finally {
      setLoading(false)
    }
  }


  return (
    <form onSubmit={handleSubmit} className={styles.formCreate}>
      <h2>Agregar producto</h2>
      <div className={styles.colOne}>
        <label>Nombre del producto</label>
        <input
          name="product_name"
          placeholder="Nombre"
          value={product.product_name}
          onChange={handleChange}
        />
        {hasSubmitted && errors.product_name && <p className={styles.errors}>{errors.product_name}</p>}

        <label>Descripción</label>
        <textarea
          name="description"
          placeholder="Descripción"
          value={product.description}
          onChange={handleChange}
          maxLength={200}
        />
        {hasSubmitted && errors.description && <p className={styles.errors}>{errors.description}</p>}

        <label>Categoría</label>
        <input
          name="category"
          placeholder="Categoría"
          value={product.category}
          onChange={handleChange}
        />

        {hasSubmitted && errors.category && <p className={styles.errors}>{errors.category}</p>}

        <label>URL de imagen</label>
        <input
          name="url_img"
          placeholder="URL de imagen"
          value={product.url_img}
          onChange={handleChange}
        />
        {hasSubmitted && errors.url_img && <p className={styles.errors}>{errors.url_img}</p>}

      </div>
      <div className={styles.presentations}>
        <h3>Presentaciones</h3>
        <Button onClick={addPresentation} variant="secondary" text="Agregar presentación" />

        {product.presentations.map((presentation, index) => (
          <div key={index} className={styles.presentationItem}>
            <label>Presentación {index + 1}</label>
            <input
              value={presentation}
              placeholder='Ej: 250gr'
              onChange={e =>
                handlePresentationChange(index, 'presentation', e.target.value)
              }
            />
            <label>Precio</label>
            <input
              type="number"
              value={product.price[index]}
              onChange={e =>
                handlePresentationChange(index, 'price', e.target.value)
              }
            />

            <button
              type="button"
              onClick={() => deletePresentation(index)}
              disabled={product.presentations.length === 1}
            >
              Eliminar
            </button>
          </div>
        ))}

        {hasSubmitted && errors.presentations && <p className={styles.errors}>{errors.presentations}</p>}


      </div>
      <div className={styles.submitWrapper}>
        <Button
          type="button"
          text="Cancelar"
          variant="secondary"
          onClick={onCancel}
        />
        <Button
          type="submit"
          text={loading ? 'Guardando...' : 'Guardar producto'}
          variant="fill"
        />
      </div>

    </form>
  )
}

export default CreateProductForm
