import { PlusIcon } from "../../icons/Plusicon"
import { ShareIcon } from "../../icons/Shareicon"

export const Card = () => {
    return <div> 
        <span  className="p-4 bg-white rounded-md shadow-md border-slate-200 border-1 block max-w-96">
            <div className = "flex justify-between">
                <div className = "flex items-center">
                    <div className="p-2"><ShareIcon size = "md" /></div>
                    Ideas
                </div>
                <div className = "flex items-center">
                    <PlusIcon size = "lg"/>
                    <ShareIcon size = "md" />
                </div>
            </div>
        </span>
    </div>
}