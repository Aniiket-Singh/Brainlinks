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
    "secondary" : "bg-purple-400 text-purple-600"
}

const defaultStyles = "rounded md"

const sizeStyles = {
    "sm" : "p-2",
    "md" : "p-4",
    "lg" : "p-6"
}

export const Button =(props: ButtonProps) => {
    return <button className = {`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]} `}>{props.text}</button>
} 