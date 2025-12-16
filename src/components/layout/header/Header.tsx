import { BiUserCircle } from 'react-icons/bi'
import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../../context/AuthContext'
import { useEffect, useRef, useState } from 'react'
import styles from './Header.module.css'

const Header = () => {
    const { user, logout, isAuthenticated, openLoginModal } = useAuthContext()
    const [dropdownOpen, setDropdownOpen] = useState(false)

    const userBtnRef = useRef<HTMLButtonElement | null>(null)
    const [dropdownPosition, setDropdownPosition] = useState<{ top: number; left: number }>({
        top: 0,
        left: 0,
    })
    const dropdownRef = useRef<HTMLDivElement | null>(null)

    const getFirstName = (fullName: string | null) => {
        if (!fullName) return ''
        return fullName.split(' ')[0]
    }

    const toggleDropdown = () => {
        if (!userBtnRef.current) return
        const rect = userBtnRef.current.getBoundingClientRect()
        setDropdownPosition({
            top: rect.bottom + 8,
             left: rect.right - 140,
        })

        setDropdownOpen(prev => !prev)
    }

    const rol = user?.role === 'admin' ? 'ADMINISTRADOR' : 'CLIENTE'

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node

            if (
                dropdownOpen &&
                dropdownRef.current &&
                !dropdownRef.current.contains(target) &&
                userBtnRef.current &&
                !userBtnRef.current.contains(target)
            ) {
                setDropdownOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [dropdownOpen])


    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <header className={styles.hero}>
                    <nav className={styles.nav}>
                        <Link to="/" className={styles.nav__logoLink}>
                            <img src="/nuts_logo.svg" className={styles.nav__logo} />
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
                                <Link to="#contact" className={styles.nav__link}>Contacto</Link>
                            </li>
                            {!isAuthenticated && (
                                <li className={styles.nav__item}>
                                    <button onClick={openLoginModal} className={styles.nav__link}>Iniciar sesión</button>
                                </li>
                            )}
                            {user && (
                                <li className={styles.nav__item}>
                                    <span
                                        className={styles.nav_icon}
                                        onClick={toggleDropdown}
                                        ref={userBtnRef}
                                    >
                                        <FaUser />
                                    </span>
                                </li>
                            )}
                        </ul>
                        {user && dropdownOpen && (
                            <div
                                ref={dropdownRef}
                                className={styles.dropdown}
                                style={{
                                    top: dropdownPosition.top,
                                    left: dropdownPosition.left,
                                }}
                            >
                                <span>{rol}</span>
                                <p>{getFirstName(user.name)}</p>
                                <hr/>
                                <button onClick={logout}>cerrar sesión</button>
                            </div>
                        )}
                    </nav>
                </header>
            </div>
        </div>
    )
}

export default Header
