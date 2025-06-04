'use client';

import Link from 'next/link';
import styles from './page.module.css';

// Define categories and their corresponding images
const categories = [
  {
    id: 'portraits',
    title: 'Портреты',
    description: 'Индивидуальные и групповые портреты',
    coverImage: '/portfolio/portrait1.webp',
  },
  {
    id: 'weddings',
    title: 'Свадьбы',
    description: 'Свадебные церемонии и торжества',
    coverImage: '/portfolio/portrait4.webp',
  },
  {
    id: 'events',
    title: 'Мероприятия',
    description: 'Корпоративные и частные мероприятия',
    coverImage: '/portfolio/portrait7.webp',
  },
];

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Портфолио</h1>
      <p className={styles.subtitle}>Выберите категорию для просмотра работ</p>
      
      <div className={styles.categoriesGrid}>
        {categories.map((category) => (
          <Link 
            href={`/portfolio/${category.id}`} 
            key={category.id}
            className={styles.categoryCard}
          >
            <div className={styles.imageWrapper}>
              <img
                src={category.coverImage}
                alt={category.title}
                className={styles.image}
              />
            </div>
            <div className={styles.categoryInfo}>
              <h2 className={styles.categoryTitle}>{category.title}</h2>
              <p className={styles.categoryDescription}>{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
