import classNames from "classnames"

export default function Button({ children, primary, secondary, danger, warning, rounded, outline, ...rest }) {

    const customStyling = classNames(rest.className, 'buttonClass', {
        'primaryClass': primary,
        'secondaryClass': secondary,
        'dangerClass': danger,
        'warningClass': warning,
        'roundedClass': rounded,
        'outlineClass': outline,
    })

    return (
        <div className="button">
            <button  {...rest} className={customStyling}>{children}</button>
        </div>
    )
}