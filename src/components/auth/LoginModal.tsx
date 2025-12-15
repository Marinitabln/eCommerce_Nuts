import { useState, type FormEvent } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import styles from './LoginModal.module.css'

import Button from '../ui/Button'
import { useAuthContext } from '../../context/AuthContext'


type LoginModalProps = {
  onClose: () => void
}

const LoginModal = ({ onClose }: LoginModalProps) => {

  const { login, authLoading } = useAuthContext()

  const navigate = useNavigate()
  const location = useLocation()

  const [form, setForm] = useState({email: '', password: '' })

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await login(form.email, form.password)
      onClose()
      navigate('/pagar')

    } catch (err) {
      alert('Credenciales inválidas')
    }
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose}>✕</button>

        <h2>Iniciar sesión</h2>
        <p className={styles.text}>Ingresa tus credenciales para comenzar</p>
        <form onSubmit={handleLogin}>
          
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <Button onClick={() => { }} type='submit' text='Iniciar sesión' variant='fill' />
          <Button onClick={onClose} type='submit' text='Cancelar' variant='secondary' />
        </form>
      </div>
    </div>
  )
}

export default LoginModal
