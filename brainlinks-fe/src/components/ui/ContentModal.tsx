import { useOutsideClick } from "../../hooks/useOnClickOutside";
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./InputBox";


interface ModalProps {
    open: boolean;
    onClose: () => void;
}

export function CreateContentModal({open, onClose}: ModalProps) {
    // const [modalOpen, setModalOpen] = useState(false); 
    // for self-managed (uncontrolled component)

    const modalRef = useOutsideClick(onClose);

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
                            <Input placeholder = "Title"/>
                            <Input placeholder = "Link"/>
                        </div>
                        <div className="flex justify-center">
                            <Button size="md" variant="primary" text="Submit"/>
                        </div>
                    </div> 
            </div>}
        </div> 
    
}

