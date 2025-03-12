import { useEffect, useRef } from "react";

export function useOutsideClick(callback: () => void) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback(); // Call the provided callback function
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [callback]);

    return ref; // Return the ref to be used in the component
}
