import React from 'react'
import styles from './Footer.module.css'
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contact}>
          <h4>Contactanos</h4>
          <FaWhatsapp size={30} color='#fff' />
          <a href=''>+54 9 2612 56-0314</a>
          <a href=''>+54 9 2615 54-6708</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
