import "./card.css";

interface CardProps {
    image: string;
    title: string;
    subtitle?: string;
    content: string
}

export default function Card({image, title = "Title", subtitle = "Subtitle", content = "Content"}: CardProps) {
    return (
        <div className="card">
            <img src={image} alt="Image" className="image"/>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>{content}</p>
        </div>
    );
}