import { ReactElement } from "react";

interface SideBarItemProps {
    text: string;
    icon: ReactElement;
}

export function SideBarItem({text, icon}: SideBarItemProps){
    return <div className="inline-flex p-2 items-center text-gray-700 text-[17px] font-[420] my-1 ml-2 cursor-pointer hover:bg-gray-100 hover:pl-4">
        {icon} {text}
    </div> 
}