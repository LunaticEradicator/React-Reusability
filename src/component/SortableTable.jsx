import Table from "../component/Table"
import { VscArrowSmallDown } from "react-icons/vsc";
import { VscArrowSmallUp } from "react-icons/vsc";
import useSorting from "../customHook/use-sorting";

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
    const { sortBy, sortOrder, handleSorting, sortedData } = useSorting(data, config)



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
                    <th onClick={() => handleSorting(column.label)}>
                        <div className="sortElement">
                            {`${column.label}: `}  {getIcon(column.label, sortBy, sortOrder)}
                        </div>
                    </th>
            }
        }
        return column
    })


    return (
        <Table
            {...props}
            config={updatedConfig}
            data={sortedData}
        />
    )
}