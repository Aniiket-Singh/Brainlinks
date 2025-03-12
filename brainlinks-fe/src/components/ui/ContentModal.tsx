import { useOutsideClick } from "../../hooks/useOnClickOutside";
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";

interface ModalProps {
    open: boolean;
    onClose: () => void;
}

export function CreateContentModal({open, onClose}: ModalProps) {
    // const [modalOpen, setModalOpen] = useState(false); 
    // for self-managed (uncontrolled component)

    const modalRef = useOutsideClick(onClose);

    return <div> 
        {open && <div className="w-screen h-screen bg-black opacity-70 fixed top-0 left-0 flex justify-center"> 
            <div className="flex flex-col justify-center opacity">
                <div ref={modalRef} className="bg-white p-2 rounded">
                    <div className="flex justify-end">
                        <div onClick = {onClose}>
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
            </div>
        </div>}
    </div>        
    
}

interface InputProps {
    placeholder: string;
    onChange?: () => void;
}

function Input ({onChange, placeholder}: InputProps) {
    return <div>
        <input placeholder={placeholder} type = {"text"} className="px-4 py-2 border-1 m-2 rounded" onChange = {onChange}>
        </input>
    </div>
}