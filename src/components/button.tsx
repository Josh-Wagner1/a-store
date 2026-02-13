type ButtonProps = {
    text: string
    disabled?: boolean;
    onClick?: () => void;
    
}

function Button({text, disabled = false, onClick}: ButtonProps) {
    return(
        <button onClick={onClick} disabled={disabled}>
            {text}
        </button>
    )
}

export default Button