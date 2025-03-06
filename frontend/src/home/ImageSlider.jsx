import React, { useState, useEffect } from 'react';
import image1 from '../assets/temple.jpg';
import image2 from '../assets/temple2.jpg';
import image3 from '../assets/temple3.jpg';
import { GrCaretPrevious,GrCaretNext } from "react-icons/gr";

const ImageSlider = () => {
    const images = [
        image1,
        image2,
        image3
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setActiveIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000); // Change image every 5 seconds

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="image-slider-container">
            {/* Active Image */}
            <div className="active-image">
                <img
                    src={images[activeIndex]}
                    alt="Active Image"
                    className="active-image-img"
                />
            </div>

            {/* Thumbnails & Navigation */}
            <div className="thumbnails">
                <button className="arrow-button" onClick={handlePrev}>
                <GrCaretPrevious />
                </button>
                {images.slice(activeIndex - 1, activeIndex + 2).map((image, index) => (
                    <div
                        key={index}
                        className={`thumbnail ${activeIndex === index + activeIndex - 1 ? 'active' : ''}`}
                    >
                        <img src={image} alt={`Thumbnail ${index}`} className="thumbnail-img" />
                    </div>
                ))}
                <button className="arrow-button " onClick={handleNext}>
                <GrCaretNext />
                </button>
            </div>
        </div>
    );
};

export default ImageSlider;
