import "../App.css";
import "./button.css";

interface ButtonProps {
    className: string;
    label: string;
    onClick: () => void;
    disabled?: boolean;
}

export default function Button({className="proceedButton", label="Label", onClick, disabled=false}: ButtonProps) {
    return (
        <button className={className} onClick={onClick} disabled={disabled}>
                {label}
        </button>
    );
}