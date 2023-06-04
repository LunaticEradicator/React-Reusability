
export default function Table({ data, config, keyFn }) {

    // To show table header with custom amount of column
    const renderTableHeader = config.map(row => {
        return (
            <th key={row.label}>{row.label}</th>
        )
    })

    const renderTableBody = data.map((rowData) => {
        // const colorDiv = { backgroundColor: fruit.color }

        const renderCells = config.map(row => {
            return <td key={row.label} >{row.render(rowData)}</td>
        })

        return (
            <tr key={keyFn(rowData)}>
                {/* <td>{fruit.name}</td>
                <td><div style={colorDiv} className="tb-colorDiv"> </div></td>
                <td>{fruit.score}</td> */}
                {renderCells}
            </tr >
        )
    })

    return (
        <table className="table">
            <thead>
                <tr >
                    {/* <th>Fruit</th>
                    <th>Color</th>
                    <th>Score</th> */}
                    {renderTableHeader}
                </tr>
            </thead>
            <tbody>
                {renderTableBody}
            </tbody>
        </table>
    )
}