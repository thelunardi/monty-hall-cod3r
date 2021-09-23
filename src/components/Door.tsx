import styles from '../styles/Door.module.css'
import DoorModel from '../model/door'

interface DoorProps {
    door: DoorModel
    onChange: (newDoor: DoorModel) => void
}

export default function Door(props: DoorProps) {
    const {door} = props
    const isDoorSelected = door.selected && !door.isOpen ? styles.selected : ''

    const changeSelectedDoor = e => props.onChange(door.changeSelectedDoor())
    const openDoor = e => {
        e.stopPropagation()
        props.onChange(door.openDoor())
    }

    function renderDoor() {
        return (
            <div className={styles.door}>
                <div className={styles.number}>{door.number}</div>
                <div className={styles.doorHandle} onClick={openDoor} />
            </div>
        )
    }

    return (
        <div className={styles.area} onClick={changeSelectedDoor}>
            <div className={`${styles.frame} ${isDoorSelected}`}>
                {door.isOpen ? false : renderDoor()}
            </div>
            <div className={styles.floor} />
        </div>
    )
}
