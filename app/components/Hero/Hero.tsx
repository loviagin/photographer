"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./Hero.module.css";

const slides = [
  {
    image: "/moscow.webp"
  },
  {
    image: "/moscow.webp"
  },
  {
    image: "/moscow.webp"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        {slides.map((slide, index) => (
          <Image
            key={index}
            src={slide.image}
            alt="Фотосессия"
            fill
            priority={index === 0}
            className={`${styles.heroImage} ${index === currentSlide ? styles.active : ''}`}
          />
        ))}
        <div className={styles.heroOverlay} />
      </div>
      
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroTitleLine}>Запечатлим</span>
            <span className={styles.heroTitleLine}>лучшие моменты</span>
            <span className={styles.heroTitleLine}>вашей жизни</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Профессиональная фотосъемка для любых событий
          </p>
        </div>
        
        <div className={styles.heroButtons}>
          <button className={styles.primaryButton}>
            <span>Записаться на фотосессию</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className={styles.secondaryButton}>
            <span>Посмотреть портфолио</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M2.45825 12C3.73253 7.94288 7.52281 5 12.0004 5C16.478 5 20.2683 7.94291 21.5426 12C20.2683 16.0571 16.478 19 12.0004 19C7.52281 19 3.73251 16.0571 2.45825 12Z" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>
        </div>

        {/* <div className={styles.sliderNavigation}>
          <button onClick={prevSlide} className={styles.sliderButton}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className={styles.sliderDots}>
            {slides.map((_, index) => (
              <button
                key={index}
                className={`${styles.sliderDot} ${index === currentSlide ? styles.active : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
          <button onClick={nextSlide} className={styles.sliderButton}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div> */}

        <div className={styles.heroScroll}>
          <span>Прокрутите вниз</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19 12L12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
} 