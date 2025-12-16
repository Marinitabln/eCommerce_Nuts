import { ProductBase } from "../types/product-type";

export const getProducts = async () => {
      try {
        const response = await fetch('https://68dfefb793207c4b47933ab5.mockapi.io/api/PRODUCTS');
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

export const postProducts = async (product: ProductBase) => {
  const response = await fetch(
    'https://68dfefb793207c4b47933ab5.mockapi.io/api/PRODUCTS',
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