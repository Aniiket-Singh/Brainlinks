import axios from "axios";
import { useOutsideClick } from "../../hooks/useOnClickOutside";
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./InputBox";

import { useRef, useState } from "react";
import { BACKEND_URL } from "../../config";

interface ModalProps {
    open: boolean;
    onClose: () => void;
}

enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter"
}

export function CreateContentModal({open, onClose}: ModalProps) {
    // const [modalOpen, setModalOpen] = useState(false); 
    // for self-managed (uncontrolled component)

    const modalRef = useOutsideClick(onClose);
    const titleRef = useRef<HTMLInputElement>();
    const linkRef = useRef<HTMLInputElement>();
    
    const [type, setType] = useState(ContentType.Youtube)

    async function addContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        await axios.post(BACKEND_URL + "/api/v1/content", {
            link,
            title,
            type
        }, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
    }

    return <div> 
            {open && <div className="w-screen h-screen bg-black/70 fixed top-0 left-0 flex items-center justify-center backdrop-blur-none"> 
            {/* for some reason backdrop-filter-none works, all other methods including relative-absolute and ReactPortal were useless*/}
                    <div ref={modalRef} className="absolute bg-white  p-2 rounded opacity-100">
                        <div className="flex justify-end">
                            <div onClick = {onClose} className="cursor-pointer">
                                <CrossIcon />
                            </div>
                        </div>
                        <div>
                            <Input reference = {titleRef} placeholder = "Title"/>
                            <Input reference = {linkRef} placeholder = "Link"/>
                        </div>
                        <div className="flex justify-center my-2 gap-3">
                            <Button size = "md" text = "Youtube" variant = {type === ContentType.Youtube ? "primary" : "secondary"} onClick={() => {setType(ContentType.Youtube)}} />
                            <Button size = "md" text = "Twitter" variant = {type === ContentType.Twitter ? "primary" : "secondary"} onClick={() => {setType(ContentType.Twitter)}} />
                        </div>
                        <div className="flex justify-center p-2">
                            <Button onClick = {addContent} size = "md" text = "Submit" variant = "primary" />
                        </div>
                    
                    </div> 
            </div>}
        </div> 
    
}

