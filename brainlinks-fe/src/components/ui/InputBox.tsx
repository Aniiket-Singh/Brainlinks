interface InputProps {
    placeholder: string;
    // onChange?: () => void;
    reference: any;
}

export function Input ({reference, placeholder}: InputProps) {
    return <div>
        <input ref={reference} placeholder={placeholder} type = {"text"} className="px-4 py-2 border-1 m-2 rounded" >
        </input>
    </div>
}