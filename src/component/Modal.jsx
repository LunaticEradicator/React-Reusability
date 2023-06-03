import { useEffect } from "react";
import { createPortal } from "react-dom"

export default function Modal({ children, handleClose, actionBar }) {

    useEffect(() => {
        document.body.classList.add('modalScroll');

        return () => {
            document.body.classList.remove('modalScroll');
        }
    }, [])

    return createPortal(
        <div>
            <div onClick={handleClose} className="modalBackground"></div>
            <div className="modalContent" onClick={handleClose}>{children}{actionBar}</div>
        </div>,
        document.querySelector(".modal-container")
    )
}