import Table from "../component/Table";

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
        { label: 'Fruit', render: (fruit) => fruit.name },
        { label: 'Color', render: (fruit) => <div style={{ backgroundColor: fruit.color }} className="td-colorDiv" ></div > },
        { label: 'Score', render: (fruit) => fruit.score }
    ]

    function keyFn(data) {
        return data.name
    }

    return (
        <Table data={data} config={config} keyFn={keyFn} ></Table>
    )
}