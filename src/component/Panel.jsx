import classNames from "classnames"

export default function Panel({ children, className, ...rest }) {

    const panelClassNames = classNames("panel", className)

    return (
        <div  {...rest} className={panelClassNames}>
            {children}
        </div>
    )
}