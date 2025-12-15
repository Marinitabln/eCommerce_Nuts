import { ProductType } from "../types/product-type"

export const filterProductsByCategory = (products:ProductType[], category:string) => {
    if (!Array.isArray(products)) return []
    return products.filter(product => product.category === category)
}