import React from "react";
import "../App.css";
import "./button.css";

interface ButtonProps {
    className: string;
    label: string;
    onClick: () => void;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({className="proceedButton", label="Label", onClick, disabled=false}) => {
    return (
        <button className={className} onClick={onClick} disabled={disabled}>
                {label}
        </button>
    );
}

export default Button;