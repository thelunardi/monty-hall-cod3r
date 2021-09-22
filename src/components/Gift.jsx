import styles from '../styles/Gift.module.css'

export default function Gift() {
    return (
        <div className={styles.gift}>
            <div className={styles.cover} />
            <div className={styles.box} />
            <div className={styles.verticalLace} />
            <div className={styles.horizontalLace} />
        </div>
    )
}
