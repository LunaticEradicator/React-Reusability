import { useContext } from "react";
import NavigationContext from "../context/Navigation";

export default function useNavigationContext() {
    return (
        useContext(NavigationContext)
    )
}