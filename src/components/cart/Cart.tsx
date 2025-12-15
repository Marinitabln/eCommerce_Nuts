import styles from './Cart.module.css'
import Button from '../ui/Button.js'

import { useNavigate } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import { useAuthContext } from '../../context/AuthContext'

const Cart = () => {

    const { cart, totalCart, handleClearCart, handleClearProductById } = useCartContext()
    const { isAuthenticated, openLoginModal } = useAuthContext()

    const navigate = useNavigate()

    const handlePayment = () => {
        console.log("intentó pagar", isAuthenticated);
        
        if (isAuthenticated === false) {
            console.log("no está autenticado, abre modal");
            
            openLoginModal()
        } else {
             console.log("Está autenticado, envia a pagar");
            navigate('/pagar')
        }
    }

    return (

        <section className={styles.cart}>
            <div className={styles.container}>
                <h2>Carrito de compras</h2>
                {cart.length === 0 ? (
                    <p>Su carrito está vacío</p>)
                    :
                    <>
                        <div className={styles.cartContainer}>
                            < ul >
                                <li className={styles.cartItem}>
                                    <p>PRODUCTO</p>
                                    <p></p>
                                    <p>CANT.</p>
                                    <p>P.UNIT.</p>
                                    <p>SUBTOTAL</p>
                                    <p></p>
                                </li>
                                {(cart.map((item, index) => {
                                    console.log(Number(item.subtotal));
                                    return (
                                        <li key={index} className={styles.cartItem}>
                                            <span>{item.product_name}</span>
                                            <span>{item.presentation}</span>
                                            <span>{item.quantity}</span>
                                            <span>${item.unitPrice}</span>
                                            <span>${item.subtotal}</span>
                                            <span className={styles.deleteCartItem} onClick={() =>
                                                handleClearProductById(item.productId, item.presentation)
                                            }>X</span>
                                        </li>
                                    )
                                }
                                ))}
                                <li className={styles.totalRow}>
                                    <span>TOTAL ${totalCart}</span>
                                    <Button text="Vaciar carrito" onClick={handleClearCart} />
                                    <Button text="Pagar" onClick={handlePayment} />
                                </li>
                            </ul >
                        </div>
                    </>
                }
            </div>
        </section>
    )
}

export default Cart
