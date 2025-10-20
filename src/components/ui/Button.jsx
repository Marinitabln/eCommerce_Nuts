import styles from './Ui.module.css'
import clsx from "clsx";

const Button = ({ type, text, onClick, variant}) => {
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
