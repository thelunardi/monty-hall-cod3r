import {useState, useEffect} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

import Door from '../../../components/Door'
import {createDoors, updateDoors} from '../../../utils/doors'
import styles from '../../../styles/Game.module.css'

export default function DoorWithGift() {
    const router = useRouter()
    const [doors, setDoors] = useState([])
    const [valid, setValid] = useState(false)

    useEffect(() => {
        const doors = +router.query.doors
        const doorWithGift = +router.query.doorWithGift

        const numberDoorsValid = doors >= 3 && doors <= 100
        const numberDoorWithPresentValid = doorWithGift >= 1 && doorWithGift <= doors

        setValid(numberDoorsValid && numberDoorWithPresentValid)
    }, [doors])

    useEffect(() => {
        const doors = +router.query.doors
        const doorWithGift = +router.query.doorWithGift

        setDoors(createDoors(doors, doorWithGift))
    }, [router?.query])

    function renderDoors() {
        return doors.map(door => {
            return (
                <Door
                    key={door.number}
                    door={door}
                    onChange={newDoor => setDoors(updateDoors(doors, newDoor))}
                />
            )
        })
    }

    return (
        <div className={styles.game}>
            <div className={styles.doors}>
                {valid ?
                    renderDoors() :
                    <h1>Invalid numbers!</h1>

                }
            </div>
            <div className={styles.buttons}>
                <Link href="/">
                    <button>Restart</button>
                </Link>
            </div>
        </div>
    )
}
