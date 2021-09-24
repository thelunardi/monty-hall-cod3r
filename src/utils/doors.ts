import DoorModel from '../model/door';

export function createDoors(quantity: number, doorWithPresent: number): DoorModel[] {
    return Array.from({length: quantity}, (_, i) => {
        const doorNumber = i + 1
        const hasGift = doorNumber === doorWithPresent
        return new DoorModel(doorNumber, hasGift)
    })
}

export function updateDoors(doors: DoorModel[], changedDoor: DoorModel): DoorModel[] {
    return doors.map(currentDoor => {
        const isSameDoor = currentDoor.number === changedDoor.number

        if (isSameDoor) {
            return changedDoor
        }
        return changedDoor.isOpen ? currentDoor : currentDoor.deselectedDoor()
    })
}
