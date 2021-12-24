import './Slider.css'
import {useEffect, useState} from "react";

export default function Slider() {

    const images = [
        <img src={'https://i.ibb.co/3dnb7VG/image3.jpg'} alt='Доставка'/>,
        <img src={'https://i.ibb.co/XJ4F7yj/image2.jpg'} alt='Оплата'/>,
        <img src={'https://i.ibb.co/3dnb7VG/image3.jpg'} alt='Доставка'/>
    ]
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => {
                const res = current === images.length - 1 ? 0 : current + 1
                return res
            })
        }, 5000)
        return () => clearInterval()
    }, [])

    const previousImageIndex = activeIndex ? activeIndex - 1 : images.length - 1
    const nextImageIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1

    return (
        <div className="slider main__slider">
            <div className="slider-image image image-previous"
                 key={previousImageIndex}>
                 {images[previousImageIndex]}
            </div>
            <div className="slider-image image"
                 key={activeIndex}>
                 {images[activeIndex]}
            </div>
            <div className="slider-image image image-next"
                 key={nextImageIndex}>
                 {images[nextImageIndex]}
            </div>
        </div>
    )
}