import { useEffect, useRef } from "react";
//useState

interface TweetProps{
    link: string;
}

const EmbeddedTweet = (props: TweetProps) => {
    const tweetContainerRef = useRef<HTMLDivElement>(null);
    // const [isTweetLoaded, setIsTweetLoaded] = useState(false);
    
    const parts = props.link.split("/");
    const tweetID = parts[parts.length - 1];

    useEffect(() => {
        if ((window as any).twttr && (window as any).twttr.widgets && tweetContainerRef.current) {
            tweetContainerRef.current.innerHTML = ""; //remove previous embeds

            (window as any).twttr.widgets.createTweet(tweetID, tweetContainerRef.current);
            // setIsTweetLoaded(true);
        }
    }, []); //isTweetLoaded

    return <div ref={tweetContainerRef}></div>;
};

export default EmbeddedTweet;



