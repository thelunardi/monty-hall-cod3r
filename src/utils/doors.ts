import DoorModel from '../model/door';

export function createDoors(quantity: number, selected: number): DoorModel[] {
    return Array.from({length: quantity}, (_, i) => {
        const number = i + 1
        const hasGift = number === selected
        return new DoorModel(number, hasGift)
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
