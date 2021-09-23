import {useState} from 'react'
import Door from '../components/Door'
import {createDoors, updateDoors} from '../utils/doors'

export default function Home(props) {
    const [doors, setDoors] = useState(createDoors(3, 1))

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
        <div style={{display: 'flex'}}>
            {renderDoors()}
        </div>
    )
}
