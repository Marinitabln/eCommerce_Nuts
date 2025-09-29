import React from 'react'
import styles from './Cart.module.css'

const Cart = ({ cart, handleClearCart }) => {

    //Total amount cart
    /* const total = cart.reduce((sum, item) => sum + item.totalPrice) */


    return (

        <section className={styles.cart}>
            <h1>Carrito de compras</h1>
            {cart.length === 0 ? (
                <p>Su carrito está vacío</p>)
                :
                <>
                    < ul className={styles.cartContainer} >
                        {(cart.map((item, index) => {
                            console.log({ item });
                            return (
                                <li key={index}>{item.product_title}</li>
                            )
                        }
                        ))}
                        <button onClick={handleClearCart}>Vaciar carrito</button>
                    </ul >

                </>
            }

        </section>
    )
}

export default Cart
