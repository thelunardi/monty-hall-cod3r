import styles from '../styles/NumericEnter.module.css'

interface NumericEnterProps {
    text: string
    value: number
    onChange: (newValue: number) => void
}

export default function NumericEnter(props: NumericEnterProps) {
    const decrement = () => props.onChange(props.value - 1)

    const increment = () => props.onChange(props.value + 1)

    return (
        <div className={styles.numeric}>
            <span className={styles.text}>{props.text}</span>
            <span className={styles.value}>{props.value}</span>
            <div className={styles.buttons}>
                <button className={styles.button} onClick={decrement}>-</button>
                <button className={styles.button} onClick={increment}>+</button>
            </div>
        </div>
    )
}
