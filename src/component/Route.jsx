import useNavigationContext from "../customHook/useNavigationContext";

export default function Route({ path, children }) {
    const { currentPage } = useNavigationContext()

    if (path === currentPage) {
        return children;
    }

    return null
}