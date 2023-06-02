import Button from '../component/Button'
import { TiAnchor } from "react-icons/ti";

function ButtonPage() {

    function handleOnClick() {
        console.log('Clicked')
    }

    function handleOnMouseEnter() {
        console.log('Clicked')
    }

    return (
        <div className='buttonPage'>
            <Button rounded onClick={handleOnClick}><TiAnchor></TiAnchor>Primary</Button>
            <Button secondary onMouseEnter={handleOnMouseEnter}>Secondary</Button>
            <Button danger>Danger</Button>
            <Button warning>Warning</Button>
            <Button outline rounded>Outline</Button>
            <Button rounded>Rounded</Button>
        </div >
    )
}

export default ButtonPage
