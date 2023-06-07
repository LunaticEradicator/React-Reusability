// import Table from "../component/Table";
import SortableTable from "../component/SortableTable"

export default function TablePage() {

    // thead means header content
    // tbody means body content
    // tr  means each row
    // td means each column inside the row


    const data = [ // Data Item
        { name: "Mango", color: 'Orange', score: 3 },
        { name: "Apple", color: 'red', score: 5 },
        { name: "Lime", color: 'lime', score: 4 },
        { name: "Coconut", color: 'burlywood', score: 1 }
    ]

    const config = [ //Reuse The above Data with custom amount of row for <thead> <tbody> =><td>
        { label: 'Name', render: (fruit) => fruit.name, sortValue: (item) => item.name },
        { label: 'Color', render: (fruit) => <div style={{ backgroundColor: fruit.color }} className="td-colorDiv" ></div > },
        { label: 'Score', render: (fruit) => fruit.score, sortValue: (item) => item.score }
    ]

    function keyFn(data) {
        return data.name
    }

    return (
        <SortableTable data={data} config={config} keyFn={keyFn} ></SortableTable>
    )
}