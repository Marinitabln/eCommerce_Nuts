
import { useAuthContext } from '../../context/AuthContext'
import { useCartContext } from '../../context/CartContext'
import { CartItem } from '../../types/product-type'
import { User } from '../../types/user-type'
import { buildWhatsappMessage } from '../../utils/buildWhatsappMessage'
import Button from '../ui/Button'
import styles from './Checkout.module.css'


const Checkout = () => {
    const { user } = useAuthContext()
    const { cart, totalCart } = useCartContext()

    const handleWhatsappClick = () => {
        console.log({ user });

        if (!user) return

        const phone = '5492613608300'
        const message = buildWhatsappMessage(user, cart, totalCart)

        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
        console.log(url)
        window.open(url, '_blank')
    }



    /* const handleMercadoPago = async (cart : CartItem[]) => {
      const res = await fetch('http://localhost:3000/create-preference', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cart })
      })
      const data = await res.json()
      window.location.href = data.init_point
    }
     */


    return (
        <section className={styles.checkoutContainer}>

            <h1 className={styles.title}>Finalizar compra</h1>
            <div className={styles.gridContainer}>
                <div className={styles.userData}>
                    <h2>Datos del cliente</h2>
                    <p><strong>Nombre:</strong> {user?.name}</p>
                    <p><strong>Email:</strong> {user?.email}</p>
                </div>

                <div className={styles.secondCol}>
                    <div className={styles.summary}>
                        <h2>Resumen del pedido</h2>

                        {cart.map((item, index) => (
                            <div key={index}>
                                <p>
                                    {item.product_name} ({item.presentation}) x {item.quantity}
                                </p>
                                <p>${item.subtotal}</p>
                            </div>
                        ))}

                        <h3>Total: ${totalCart}</h3>
                    </div>

                    <div>
                        <Button
                            text="Pagar por WhatsApp"
                            variant='fill'
                            onClick={handleWhatsappClick}
                        />

                        {/*   <Button
          text="Pagar con MercadoPago"
          variant="secondary"
          onClick={() => handleMercadoPago(cart)}
        /> */}
                        <Button
                            text="Seguir comprando"
                            variant='secondary'
                            onClick={() => window.history.back()}
                        />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Checkout
