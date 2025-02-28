import { useEffect, useRef } from "react";
//useState
const EmbeddedTweet = () => {
    const tweetContainerRef = useRef<HTMLDivElement>(null);
    // const [isTweetLoaded, setIsTweetLoaded] = useState(false);

    useEffect(() => {
        if ((window as any).twttr && (window as any).twttr.widgets && tweetContainerRef.current) {
            tweetContainerRef.current.innerHTML = ""; //remove previous embeds

            (window as any).twttr.widgets.createTweet("1895181770565525630", tweetContainerRef.current);
            // setIsTweetLoaded(true);
        }
    }, []); //isTweetLoaded

    return <div ref={tweetContainerRef}></div>;
};

export default EmbeddedTweet;



