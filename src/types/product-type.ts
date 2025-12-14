export type ProductType = {
  id: string;
  category?: string;
  product_name: string;
  description: string;
  presentations: string[];
  price: number[];
  url_img: string;
};


export type CartItem = {
  productId: string
  product_name: string
  presentation: string
  quantity: number
  unitPrice: number
  subtotal: number
}