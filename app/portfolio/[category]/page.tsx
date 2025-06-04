'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './page.module.css';

const categoryData = {
  portraits: {
    title: 'Портреты',
    description: 'Индивидуальные и групповые портреты',
    images: [
      '/portfolio/portrait1.webp',
      '/portfolio/portrait2.webp',
      '/portfolio/portrait3.webp',
    ],
  },
  weddings: {
    title: 'Свадьбы',
    description: 'Свадебные церемонии и торжества',
    images: [
      '/portfolio/portrait4.webp',
      '/portfolio/portrait5.webp',
      '/portfolio/portrait6.webp',
    ],
  },
  events: {
    title: 'Мероприятия',
    description: 'Корпоративные и частные мероприятия',
    images: [
      '/portfolio/portrait7.webp',
      '/portfolio/portrait8.webp',
      '/portfolio/portrait9.webp',
    ],
  },
};

export default function CategoryPage() {
  const params = useParams();
  const category = params.category as keyof typeof categoryData;
  const data = categoryData[category];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;

      switch (e.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowLeft':
          sliderRef?.slickPrev();
          break;
        case 'ArrowRight':
          sliderRef?.slickNext();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, sliderRef]);

  if (!data) {
    return <div>Категория не найдена</div>;
  }

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    className: styles.slider,
    initialSlide: currentSlide,
  };

  const openModal = (index: number) => {
    setCurrentSlide(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/portfolio" className={styles.backButton}>
          ← Назад к категориям
        </Link>
        <h1 className={styles.title}>{data.title}</h1>
        <p className={styles.description}>{data.description}</p>
      </div>

      <div className={styles.gallery}>
        {data.images.map((image, index) => (
          <div 
            key={index} 
            className={styles.imageWrapper}
            onClick={() => openModal(index)}
          >
            <img
              src={image}
              alt={`${data.title} ${index + 1}`}
              className={styles.image}
            />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>×</button>
            <Slider ref={setSliderRef} {...sliderSettings}>
              {data.images.map((image, index) => (
                <div key={index} className={styles.slide}>
                  <img
                    src={image}
                    alt={`${data.title} ${index + 1}`}
                    className={styles.slideImage}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </div>
  );
} 