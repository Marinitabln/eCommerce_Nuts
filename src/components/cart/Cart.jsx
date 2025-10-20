import React, { useEffect, useState } from 'react'
import styles from './Cart.module.css'
import Button from '../ui/Button'

const Cart = ({ cart, handleClearCart }) => {


    //Total Carrito
    const [total, setTotal] = useState(0)


    useEffect(() => {

        cart.length > 0 ? (
            cart.map((item) => {
                setTotal(prevTotal => prevTotal + Number(item.subtotal))
            })
        ) : ""

    }, [cart])


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
                                </li>
                                {(cart.map((item, index) => {
                                    console.log(Number(item.subtotal));
                                    return (
                                        <li key={index} className={styles.cartItem}>
                                            <span>{item.product_name}</span>
                                            <span>{item.presentation}</span>
                                            <span>{item.quantity}</span>
                                            <span>{item.unitPrice}</span>
                                            <span>{item.subtotal}</span>
                                        </li>
                                    )
                                }
                                ))}
                                <li className={styles.totalRow}>
                                    <span>TOTAL ${total}</span>
                                    <Button text="Vaciar carrito" onClick={handleClearCart} />
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
