"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import BookingForm from '../BookingForm/BookingForm';
import Link from "next/link";

const slides = [
  {
    image: "/portfolio/portrait1.webp"
  },
  {
    image: "/portfolio/portrait2.webp"
  },
  {
    image: "/portfolio/portrait5.webp"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        {slides.map((slide, index) => (
          <Image
            key={index}
            src={slide.image}
            alt="Photos"
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
            <span className={styles.heroTitleLine}>Let's capture</span>
            <span className={styles.heroTitleLine}>the best moments</span>
            <span className={styles.heroTitleLine}>of your life</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Professional photography for any events
          </p>
        </div>
        
        <div className={styles.heroButtons}>
          <button className={styles.primaryButton} onClick={() => setIsBookingFormOpen(true)}>
            <span>Book a photo session</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <Link href="/portfolio" className={styles.secondaryButton}>
            <span>View portfolio</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M2.45825 12C3.73253 7.94288 7.52281 5 12.0004 5C16.478 5 20.2683 7.94291 21.5426 12C20.2683 16.0571 16.478 19 12.0004 19C7.52281 19 3.73251 16.0571 2.45825 12Z" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </Link>
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
          <span>Scroll down</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19 12L12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <BookingForm 
        isOpen={isBookingFormOpen}
        onClose={() => setIsBookingFormOpen(false)}
      />

    </section>
  );
} 