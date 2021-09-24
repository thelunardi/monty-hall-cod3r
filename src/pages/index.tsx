import {useState} from 'react'
import Link from 'next/link'

import Card from '../components/Card'
import styles from '../styles/Home.module.css'
import NumericEnter from '../components/NumericEnter'

export default function Home(props) {
    const [doorsNumber, setDoorsNumber] = useState(3)
    const [doorWithPresent, setDoorWithPresent] = useState(1)

    return (
        <div className={styles.home}>
            <div>
                <Card bgcolor="#c0392c">
                    <h1>Monty Hall</h1>
                </Card>
                <Card>
                    <NumericEnter
                        text="Doors Number"
                        value={doorsNumber}
                        onChange={newDoorsNumber => setDoorsNumber(newDoorsNumber)}
                    />
                </Card>
            </div>
            <div>
                <Card>
                    <NumericEnter
                        text="Prized Door"
                        value={doorWithPresent}
                        onChange={newDoor => setDoorWithPresent(newDoor)}
                    />
                </Card>
                <Card bgcolor="#28a085">
                    <Link href={`/game/${doorsNumber}/${doorWithPresent}`} passHref>
                        <h2 className={styles.link}>Start</h2>
                    </Link>
                </Card>
            </div>
        </div>
    )
}
