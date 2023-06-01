import { useState } from 'react'
import './App.css'
import Dropdown from '../component/Dropdown'

function DropdownPage() {
    const [selected, setSelected] = useState(null)

    const handleSelected = (newOption) => {
        setSelected(newOption)
    }
    const option = [
        { label: "Rtx 4090, Most Powerful", value: "4090" },
        { label: "Rtx 4080, Powerful", value: "4080" },
        { label: "Rtx 4070, Disappointment", value: "4070" },
    ]

    return (
        <Dropdown
            option={option}
            value={selected}
            onChange={handleSelected}
        />
    )
}

export default DropdownPage
