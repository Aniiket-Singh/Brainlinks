import { BrainLinksIcon } from "../../icons/BrainLinksIcon";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { SideBarItem } from "./SidebarItem";

export function Sidebar() {
    return <div className="h-screen w-60 border-r-3 border-purple-100 bg-white fixed left-0 top-0 p-2 pt-4 flex flex-col">
        <div className="text-3xl flex items-center pb-4 ml-3 my-4">Brainlinks    {<BrainLinksIcon/>} </div>

        <SideBarItem icon = {<TwitterIcon />} text = "Twitter" />
        <SideBarItem icon = {<YoutubeIcon/>} text = "Youtube" />
    </div>

}