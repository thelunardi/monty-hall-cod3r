import {useState} from 'react'
import Door from '../components/Door'
import DoorModel from '../model/door'

export default function Home(props) {
    const [door, setDoor] = useState(new DoorModel(1, false, true))

    return (
        <div>
            <Door door={door} onChange={newDoor => setDoor(newDoor)} />
        </div>
    )
}
