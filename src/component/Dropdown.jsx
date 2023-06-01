import { useEffect, useRef, useState } from "react"
import { nanoid } from "nanoid"
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";


export default function Dropdown(props) {
    const [isOpen, setIsOpen] = useState(false)
    const divElement = useRef();

    useEffect(() => {
        function handleClick(event) {
            if (!divElement.current) {
                return;
            }

            if (!divElement.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        }
    }, [])

    const handleMenu = () => {
        setIsOpen(prevIsOpen => !prevIsOpen)
    }

    const handleOptionClick = (option) => {
        setIsOpen(false)
        props.onChange(option)
    }

    const renderOption = props.option.map(option => {
        return (
            <>
                <div onClick={() => handleOptionClick(option.value)} key={nanoid()}> {option.label}</div>
            </>
        )
    })

    return (
        <div ref={divElement} className="dropdown">
            {/* <h3 className="dropdown-header" onClick={handleMenu}>{!props.selected ? '...selected' : props.selected}</h3> */}
            <Panel onClick={handleMenu} className="dropdown-header">
                <h3>{props?.value || 'Select...'} </h3>
                <GoChevronDown />
            </Panel>
            {isOpen && <Panel className="dropdown-content">{renderOption}</Panel>}
        </div>
    )
}