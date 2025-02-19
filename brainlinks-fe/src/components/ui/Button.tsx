import { ReactElement } from "react";

interface ButtonProps {
    variant: "primary" | "secondary";
    size: "sm"  | "md" | "lg";
    text: string;
    startIcon?: ReactElement; //Upgrade any to suitable types later
    endIcon?: ReactElement;
    onClick?: () => void
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
    return <button className = {`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]} inline-flex`}>
        {props.startIcon && <div className="pr-2">{props.startIcon} </div>} 
        {<div>{props.text}</div>} 
        {props.endIcon && <div className="pr-2">{props.endIcon} </div>}
    </button>
} 