interface ButtonProps {
    variant: "primary" | "secondary";
    size: "sm"  | "md" | "lg";
    text: string;
    startIcon?: any; //Upgrade any to suitable types later
    endIcon?: any;
    onClick: () => void
}

export const Button =(props: ButtonProps) => {
    return <button></button>
}