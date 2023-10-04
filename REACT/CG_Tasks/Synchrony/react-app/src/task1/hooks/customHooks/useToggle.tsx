import { useState, useCallback } from "react";

export const useToggle = (initialValue: boolean): [boolean, () => void, () => void, () => void ] => {
    const [show, setShow] = useState(initialValue);
    const toggle = useCallback(() => {
        setShow((prevState) => !prevState)
    }, []);
    const close = useCallback(() => setShow(false), []);
    const open = useCallback(() => setShow(true), []);
    return [show, toggle, close, open]
}
