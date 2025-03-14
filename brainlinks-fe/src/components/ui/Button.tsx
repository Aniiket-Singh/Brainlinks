import { ReactElement } from "react";

interface ButtonProps {
    variant: "primary" | "secondary";
    size: "sm"  | "md" | "lg";
    text: string;
    startIcon?: ReactElement; //Upgrade any to suitable types later
    endIcon?: ReactElement;
    onClick?: () => void;
    fullWidth?: boolean;
    loading?: boolean;
}

type Variants = "primary" | "secondary" 

// const variantStyles : {[key: Variants]: string} = {
const variantStyles : Record<Variants, string> = {
    "primary" : "bg-purple-600 text-white", 
    "secondary" : "bg-purple-100 text-purple-600"
}

const defaultStyles = "rounded-md inline-flex items-center hover:cursor-pointer disabled:cursor-default"

const sizeStyles = { 
    "sm" : "py-1 px-2",
    "md" : "py-2 px-4",
    "lg" : "py-3 px-6"
}

export const Button =(props: ButtonProps) => {
    return <button onClick={props.onClick} className = {` ${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]} ${props.fullWidth ? " w-19/20 flex justify-center" : " "} ${props.loading ? " opacity-70 border-BluePurple" : ""} ` } disabled = {props.loading} >
        {props.startIcon && <div className="pr-2">{props.startIcon} </div>} 
        {<div>{props.text}</div>} 
        {props.endIcon && <div className="pl-2">{props.endIcon} </div>}
    </button>
} 