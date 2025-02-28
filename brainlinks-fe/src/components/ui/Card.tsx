import { PlusIcon } from "../../icons/Plusicon"
import { ShareIcon } from "../../icons/Shareicon"
import EmbeddedTweet from "../Tweet"

interface CardProps {
    title: string,
    link: string,
    type: "twitter" | "youtube"
}

export const Card = ({title, link, type}: CardProps) => {
    return <div> 
        <span  className="p-4 bg-white rounded-md shadow-md border-slate-200 border-1 block max-w-240   ">
            <div className = "flex justify-between">
                
                <div className = "flex items-center">
                    <div className="p-2 text-gray-600"><ShareIcon size = "md" /></div>
                    {title}
                </div>
                <div className = "flex items-center">
                    <div className = "p-2 text-gray-600"><PlusIcon size = "lg"/></div>
                    <div className = "p-2 text-gray-600">
                        <a href = {link} target = "_blank">
                            <ShareIcon size = "md"/>
                        </a> 
                    </div>
                </div>
            </div>

    
            <div className="pt-2"> 
                {type === "youtube" && <iframe width="100%" src={link.replace("watch", "embed")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}

                {type === "twitter" && <EmbeddedTweet link = {link} />} 
                {/* <blockquote className="twitter-tweet">
                    <a href = "https://twitter.com/username/status/1892788269470851548"></a>
                </blockquote> */}
            </div>

        </span>
    </div>
}