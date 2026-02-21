import { useEffect, useState } from "react";
import "../App.css";
import "./slideshow.css";

interface SlideshowProps {
    images: string[];
    delay?: number;
}

export default function Slideshow({images, delay=3000}: SlideshowProps) {
    const [index, setIndex] = useState(0);

    const nextImg = () => {
        setIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1);
    };

    const prevImg = () => {
        setIndex((prevIndex) => prevIndex === 0 ? images.length - 1: prevIndex - 1);
    };
    
    useEffect(() => {
        const timer = setTimeout(() => {
            nextImg();
        }, delay);

        return () => clearTimeout(timer);
    }, [index, delay, images.length]);

    return (
        <div className="container">
            <div className="arrow-hover">
                <span className="material-symbols-outlined size-96" onClick={prevImg}>chevron_left</span>
            </div>

            <div className="home">
                {images.map((src, i) => (
                <img key={src} src={src} alt="Image" className={`slide-image ${i === index ? "active" : ""}`}/>
                ))}
            </div>
            
            <div className="arrow-hover">
                <span className="material-symbols-outlined size-96" onClick={nextImg}>chevron_right</span>
            </div>
        </div>
    );
}