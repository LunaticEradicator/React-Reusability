import { useState } from "react";

export default function useSorting(data, config) {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);


    const handleSorting = (label) => {
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
    return {
        sortBy,
        sortOrder,
        handleSorting,
        sortedData
    }

}