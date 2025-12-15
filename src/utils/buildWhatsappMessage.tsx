import { CartItem } from "../types/product-type"
import { User } from "../types/user-type"


export const buildWhatsappMessage = (
  user: User,
  cart: CartItem[],
  total: number
) => {
  const items = cart
    .map(
      item =>
        `• _${item.product_name}_
   Presentación: ${item.presentation}
   Cantidad: ${item.quantity}
   Subtotal: $${item.subtotal}`
    )
    .join('\n\n')

  return `
Hola! Quiero realizar una compra 😊

*Datos del cliente*
Nombre: ${user.name}
Email: ${user.email}

*Pedido*
${items}

*Total: $${total}*

Gracias!
`.trim()
}
