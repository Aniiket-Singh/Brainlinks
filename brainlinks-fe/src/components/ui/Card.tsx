import { PlusIcon } from "../../icons/Plusicon"
import { ShareIcon } from "../../icons/Shareicon"
import EmbeddedTweet from "../Tweet"



export const Card = () => {
    // const tweetRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     if ((window as any).twttr && (window as any).twttr.widgets && tweetRef.current) {
    //         tweetRef.current.innerHTML = "";
    //         (window as any).twttr.widgets.createTweet(
    //             "1895181770565525630", // tweet ID
    //             tweetRef.current
    //         );
    //     }
    // }, []);

    return <div> 
        <span  className="p-4 bg-white rounded-md shadow-md border-slate-200 border-1 block max-w-144   ">
            <div className = "flex justify-between">
                
                <div className = "flex items-center">
                    <div className="p-2 text-gray-600"><ShareIcon size = "md" /></div>
                    Ideas
                </div>
                <div className = "flex items-center">
                    <div className = "p-2 text-gray-600"><PlusIcon size = "lg"/></div>
                    <div className = "p-2 text-gray-600"><ShareIcon size = "md" /></div>
                </div>
            
            </div>

            {/* <div className = "pt-2"><iframe width="100%" src="https://www.youtube.com/embed/yxDpF3XqpV4?si=hPZ7qrxBU9qnz7Lw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></div> */}
            <div className="pt-2">
                <EmbeddedTweet/>
                {/* <blockquote className="twitter-tweet" >
                    <a href = "https://twitter.com/username/status/1895181770565525630"></a>
                </blockquote> */}
            </div>

        </span>
    </div>
}