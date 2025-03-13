interface InputProps {
    placeholder: string;
    onChange?: () => void;
}

export function Input ({onChange, placeholder}: InputProps) {
    return <div>
        <input placeholder={placeholder} type = {"text"} className="px-4 py-2 border-1 m-2 rounded" onChange = {onChange}>
        </input>
    </div>
}