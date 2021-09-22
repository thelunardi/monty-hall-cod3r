import Gift from '../components/Gift'
import Door from '../components/Door'

export default function Home(props) {
    return (
        <div>
            <Gift /><Door /><Door selected />
        </div>
    )
}
