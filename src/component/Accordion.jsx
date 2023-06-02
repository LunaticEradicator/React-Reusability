export default function Accordion(props) {
    // const renderAccordion = props.itemData.map((data) => {
    //     return (
    //         <div key={data.id}>
    //             <p>{data.details}</p>
    //         </div>
    //     )
    // })

    return (
        <div className="accordion" key={props.id} >
            <div onClick={props.handleExpanded}>{props.title}</div>
            {props.isExpanded && <p>{props.details}</p>}
        </div>

        // <div >
        //   {renderAccordion}
        // </div>
    )
}