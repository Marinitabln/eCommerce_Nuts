import styles from './Header.module.css'
import logo from '../../../assets/nuts_logo.svg'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <header className={styles.hero}>
                    <nav className={styles.nav}>
                        <Link to="./" className={styles.nav__logoLink}>
                            <img src={logo} className={styles.nav__logo} />
                        </Link>

                        <label className={styles.nav__label}>
                            <input type="checkbox" className={styles.nav__checkbox} />
                        </label>

                        <ul className={styles.nav__list}>
                            <li className={styles.nav__item}>
                                <Link to="/cereales" className={styles.nav__link}>Cereales</Link>
                            </li>
                            <li className={styles.nav__item}>
                                <Link to="/frutos_secos" className={styles.nav__link}>Frutos secos</Link>
                            </li>
                            <li className={styles.nav__item}>
                                <Link to="/semillas" className={styles.nav__link}>Semillas</Link>
                            </li>
                            <li className={styles.nav__item}>
                                <Link to="/prod_envasados" className={styles.nav__link}>Prod. envasados</Link>
                            </li>
                            <li className={styles.nav__item}>
                                <Link to="#" className={styles.nav__link}>Contacto</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        </div>
    )
}

export default Header
