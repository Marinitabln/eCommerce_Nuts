import React, { useEffect, useState } from 'react'
import styles from './Cart.module.css'

const Cart = ({ cart, handleClearCart }) => {

    
    //Total Carrito
    const [total, setTotal] = useState(0)


useEffect(()=>{
    
    /* setTotal(cart.reduce((sum, item) => sum + Number(item.subtotal))) : ""
     */

    cart.length > 0 ? (
        cart.map((item)=>{
            setTotal(prevTotal => prevTotal + Number(item.subtotal))
        } )
    ):""  

},[cart])


    return (

        <section className={styles.cart}>
            <div className={styles.container}>
                <h1>Carrito de compras</h1>
                {cart.length === 0 ? (
                    <p>Su carrito está vacío</p>)
                    :
                    <>
                        < ul className={styles.cartContainer} >
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
                            <span>{total}</span>
                            <button onClick={handleClearCart}>Vaciar carrito</button>
                        </ul >

                    </>
                }
            </div>
        </section>
    )
}

export default Cart
