import { ProductBase, ProductType } from "../types/product-type";

const BASE_URL = 'https://68dfefb793207c4b47933ab5.mockapi.io/api/PRODUCTS'

// Obtener todos los productos
export const getProducts = async () => {
      try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.log({error}); 
        throw error       
      }      
    }

// Obtener un producto por ID
export const getProductById = async (id: string): Promise<ProductType> => {
  const response = await fetch(`${BASE_URL}/${id}`)

  if (!response.ok) {
    throw new Error('Error al obtener el producto')
  }

  return response.json()
}

// Crear un nuevo producto
export const postProducts = async (product: ProductBase) => {
  const response = await fetch(
    BASE_URL,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    }
  )

  if (!response.ok) {
    throw new Error('Error al crear producto')
  }

  return response.json()
}


// Actualizar un producto existente
export const updateProduct = async (
  id: string,
  product: ProductBase
): Promise<ProductType> => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  })

  if (!response.ok) {
    throw new Error('Error al actualizar el producto')
  }

  return response.json()
}

// Eliminar un producto
export const deleteProduct = async (id: string): Promise<void> => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  })

  if (!response.ok) {
    throw new Error('Error al eliminar el producto')
  }
}