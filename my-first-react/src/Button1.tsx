import styles from "./Button1.module.css"

interface Props {
    children: string;
    color?: "primary" | "secondary" | "danger";
    onClick: () => void;
}

const Button1 = ({children, color = "primary", onClick}: Props) => {
    return (
        <button className={[styles.btn, styles['btn-' + color]].join(' ')} onClick={onClick}> {children} </button>
    )
}
export default Button1