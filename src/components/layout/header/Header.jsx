import React from 'react'
import styles from './Header.module.css'
import logo from '../../../assets/nuts_logo.svg'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <header className={styles.hero}>
                    <nav className={styles.nav}>
                        <a href="./" className={styles.nav__logoLink}>
                            <img src={logo} className={styles.nav__logo} />
                        </a>

                        <label className={styles.nav__label}>
                            <input type="checkbox" className={styles.nav__checkbox} />
                        </label>

                        <ul className={styles.nav__list}>

                            <li className={styles.nav__item}>
                                <a href="#" className={styles.nav__link}>Cereales</a>
                            </li>
                            <li className={styles.nav__item}>
                                <a href="#" className={styles.nav__link}>Frutos secos</a>
                            </li>
                            <li className={styles.nav__item}>
                                <a href="#" className={styles.nav__link}>Semillas</a>
                            </li>
                            <li className={styles.nav__item}>
                                <a href="#" className={styles.nav__link}>Prod. envasados</a>
                            </li>
                            <li className={styles.nav__item}>
                                <a href="#" className={styles.nav__link}>Contacto</a>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        </div>
    )
}

export default Header
