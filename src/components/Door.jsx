import styles from '../styles/Door.module.css'

export default function Door(props) {
    const isDoorSelected = props.selected ? styles.selected : ''
    return (
        <div className={styles.area}>
            <div className={`${styles.frame} ${isDoorSelected}`}>
                <div className={styles.door}>
                    <div className={styles.number}>3</div>
                    <div className={styles.doorHandle} />
                </div>
            </div>
            <div className={styles.floor} />
        </div>
    )
}
