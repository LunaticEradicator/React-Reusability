import { useState } from 'react'
import Accordion from '../component/Accordion'
import { nanoid } from 'nanoid'

function AccordionPage() {
    const [expandedIndex, setExpandedIndex] = useState(-1)

    const data = [
        {
            id: nanoid(),
            title: 'RTX 4080',
            details: 'Rtx 4080 is Expense as not value for money'
        },
        {
            id: nanoid(),
            title: 'RTX 4090',
            details: 'Rtx 4090 is Expense as hell'
        }
    ]

    function handleExpanded(itemIndex) {
        // if (expandedIndex === itemIndex) {
        //   return expandedIndex(-1)
        // }
        // else {
        //   return expandedIndex(itemIndex)
        // }

        setExpandedIndex(prevExpandedIndex => {
            if (prevExpandedIndex === itemIndex) {
                return -1;
            }
            else {
                return itemIndex
            }
        })
    }

    const renderAccordion = data.map((data, index) => {
        const isExpanded = index === expandedIndex;

        return (
            <Accordion
                key={data.id}
                {...data}
                handleExpanded={() => handleExpanded(index)}
                isExpanded={isExpanded}
            />
        )
    })

    return (
        <div className='accordionPage'>
            {renderAccordion}
        </div>


        // <div className='app'>
        //   <Accordion
        //     itemData={data}
        //   />
        // </div>

    )
}

export default AccordionPage
