import "./card.css";

interface CardProps {
    title: string;
    subtitle?: string;
    content: string
}

export default function Card({title = "Title", subtitle = "Subtitle", content = "Content"}: CardProps) {
    return (
        <div className="card">
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>{content}</p>
        </div>
    );
}