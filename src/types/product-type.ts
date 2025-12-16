export type ProductBase = {
  product_name: string
  description: string
  url_img: string
  category: string
  presentations: string[]
  price: number[]
}

export type ProductType = ProductBase & {
  id: string
}

export type CartItem = {
  productId: string
  product_name: string
  presentation: string
  quantity: number
  unitPrice: number
  subtotal: number
}