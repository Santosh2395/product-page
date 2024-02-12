import React, { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./Carousel.css";
export const Carousel = ({ data, autoPlayInterval = 5000 }) => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(intervalId);
  }, [slide, autoPlayInterval]);

  const nextSlide = () => {
    setSlide((prevSlide) => (prevSlide + 1) % data.length);
  };

  const prevSlide = () => {
    setSlide((prevSlide) =>
      prevSlide === 0 ? data.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="carousel">
      <IoIosArrowBack onClick={prevSlide} className="arrow arrow-left" />
      {data.map((item, idx) => {
        return (
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <IoIosArrowForward onClick={nextSlide} className="arrow arrow-right" />
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};
