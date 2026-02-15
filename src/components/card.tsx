import React from "react";
import "./card.css";

interface CardProps {
    title: string;
    subtitle?: string;
    content: string
}

const Card: React.FC<CardProps> = ({title = "Title", subtitle = "Subtitle", content = "Content"}) => {
    return (
        <div className="card">
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>{content}</p>
        </div>
    );
}

export default Card;