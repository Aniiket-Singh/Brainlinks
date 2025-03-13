import { ReactElement } from "react";

interface SideBarItemProps {
    text: string;
    icon: ReactElement
}

export function SideBarItem({text, icon}: SideBarItemProps){
    return <div>
        {icon} {text}
    </div>
}