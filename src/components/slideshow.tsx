import { useEffect, useState } from "react";
import "./slideshow.css";

interface SlideshowProps {
    images: string[];
    delay?: number;
}

export default function Slideshow({images, delay=3000}: SlideshowProps) {
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1);
        }, delay);
        
        return () => clearInterval(timer);
    }, [images.length, delay]);

    return (
    <div className="home">
        {images.map((src, i) => (
            <img key={src} src={src} alt="Image" className={`slide-image ${i === index ? "active" : ""}`}/>
        ))}
    </div>
  );
}
    