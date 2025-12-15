import styles from './Ui.module.css'
import clsx from 'clsx'

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'fill' | 'simple'

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset'
  text: string
  onClick?: () => void
  variant?: ButtonVariant
}
const Button = ({ type, text, onClick, variant= 'primary'}: ButtonProps) => {
    return (
        <button
            type={type}
            className={clsx(styles.button, styles[variant])}
            onClick={onClick}>
            {text}
        </button>
    )
}

export default Button
