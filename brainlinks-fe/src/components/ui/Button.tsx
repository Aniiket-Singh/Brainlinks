interface ButtonProps {
    variant: "primary" | "secondary";
    size: "sm"  | "md" | "lg";
    text: string;
    startIcon?: any; //Upgrade any to suitable types later
    endIcon?: any;
    onClick: () => void
}

type Variants = "primary" | "secondary" 

// const variantStyles : {[key: Variants]: string} = {
const variantStyles : Record<Variants, string> = {
    "primary" : "bg-purple-600 text-white", 
    "secondary" : "bg-purple-300 text-purple-600"
}

const defaultStyles = "rounded md"

const sizeStyles = {
    "sm" : "py-1 px-2",
    "md" : "py-2 px-4",
    "lg" : "py-3 px-6"
}

export const Button =(props: ButtonProps) => {
    return <button className = {`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]} `}>{props.text}</button>
} 