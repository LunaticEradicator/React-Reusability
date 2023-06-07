import { useState } from "react";
import Table from "../component/Table"
import { VscArrowSmallDown } from "react-icons/vsc";
import { VscArrowSmallUp } from "react-icons/vsc";

// 1, find header which have 'sortValue' from config and pass that updatedConfig as the config prop

// 2, handleClick event function
// a, needs 2 state for this sortOrder, sortBy]
// b, change the sortOrder from null-> asc -> desc ... when clicking on that element

// 3,sort the data element
// a, create a copy of data prop
// b, only sort if sortOrder and sortBy are null
// c, find the correct sortValue function for sorting


export default function SortableTable(props) {
    const { config, data } = props

    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const handleClick = (label) => {
        if (sortBy && label !== sortBy) { // if we are currently sorting by one column and if we are sorting by new column
            setSortOrder('asc')
            setSortBy(label)
            return;
        }
        if (sortOrder === null) {
            setSortOrder('asc')
            setSortBy(label)
        }
        else if (sortOrder === 'asc') {
            setSortOrder('desc')
            setSortBy(label)
        }
        else if (sortOrder === 'desc') {
            setSortOrder(null)
            setSortBy(null)
        }
    }

    function getIcon(label, sortBy, sortOrder) {
        if (label !== sortBy) { // so only the corresponding label changes 
            return <div>
                <VscArrowSmallUp />
                <VscArrowSmallDown />
            </div>
        }
        if (sortOrder === null) {
            return <div>
                <VscArrowSmallUp />
                <VscArrowSmallDown />
            </div>
        }
        else if (sortOrder === "asc") {
            return <div>
                <VscArrowSmallUp />
            </div>
        }
        else if (sortOrder === "desc") {
            return <div>
                <VscArrowSmallDown />
            </div>
        }
    }

    const updatedConfig = config.map(column => { // adding a optional function to check if sortValue is available
        if (column.sortValue) {
            return {
                ...column,
                header: () =>
                    <th onClick={() => handleClick(column.label)}>
                        <div className="sortElement">
                            {`${column.label}: `}  {getIcon(column.label, sortBy, sortOrder)}
                        </div>
                    </th>
            }
        }
        return column
    })

    let sortedData = data;

    if (sortBy && sortOrder) { // if not null

        // for sorting object we always should use a function to change the sorting condition
        //  get's the sortValue function from config which is then used to sort value
        const { sortValue } = config.find(column => column.label === sortBy)
        sortedData = [...data].sort((a, b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);

            const reverseOrder = sortOrder === 'asc' ? 1 : -1

            if (typeof (valueA) === "string") {
                return valueA.localeCompare(valueB) * reverseOrder
            }
            else {
                return (valueA - valueB) * reverseOrder
            }
        })
    }

    return (
        <Table
            {...props}
            config={updatedConfig}
            data={sortedData}
        />
    )
}