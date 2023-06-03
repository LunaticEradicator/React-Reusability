import useNavigationContext from "../customHook/useNavigationContext"
import classNames from "classnames"

export default function Link({ to, children, className, activeClass }) {
    const { navigate, currentPage } = useNavigationContext();

    // console.log(currentPage)
    // console.log(to)
    const linkDivClass = classNames(className)
    const linkClass = classNames("link", currentPage === to && activeClass)

    const handleClick = (event) => {
        if (event.ctrlKey || event.metaKey) {
            return
        }

        event.preventDefault()
        navigate(to)
    }

    return (
        <div className={linkDivClass}>
            <a className={linkClass} href={to} onClick={handleClick}>{children}</a>
        </div>
    )
}