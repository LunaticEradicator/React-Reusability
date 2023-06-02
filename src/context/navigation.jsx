import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
    // create a navigate function, to navigate using pushState  [won't refresh, so won't rerender]
    // to rerender we SetState to the current page [to]

    // navigate back and forth using inbuilt browser buttons  [won't refresh, so won't rerender]
    // to rerender we SetState to the current page (window.location.pathname)

    const [currentPage, setCurrentPage] = useState(window.location.pathname)

    useEffect(() => {
        const handleClick = () => {
            setCurrentPage(window.location.pathname) // to rerender when changing page [rerender happens only with change in state ]
        }

        window.addEventListener('popstate', handleClick);

        return () => { // for cleanup if Navigation Provider is removed [Good Practice]
            window.removeEventListener('popstate', handleClick);
        }
    }, [])


    const navigate = (to) => {
        setCurrentPage(to) // to rerender when changing page [rerender happens only with change in state ]
        return window.history.pushState({}, '', to)
    }

    const value = { navigate, currentPage };
    return (
        <NavigationContext.Provider value={value}>
            {children}
        </NavigationContext.Provider >
    )
}

export default NavigationContext
export { NavigationProvider }