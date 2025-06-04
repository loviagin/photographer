import Image from 'next/image';
import styles from './Categories.module.css';

export default function Categories() {
  return (
    <section className={styles.categories}>
      <h2>Категории съёмок</h2>
      <div className={styles.categoryGrid}>
        <div className={styles.categoryCard}>
          <Image src="/categories/love-story.jpg" alt="Love Story" width={300} height={200} />
          <h3>Love Story</h3>
        </div>
        <div className={styles.categoryCard}>
          <Image src="/categories/family.jpg" alt="Семейная" width={300} height={200} />
          <h3>Семейная</h3>
        </div>
        <div className={styles.categoryCard}>
          <Image src="/categories/children.jpg" alt="Детская" width={300} height={200} />
          <h3>Детская</h3>
        </div>
        <div className={styles.categoryCard}>
          <Image src="/categories/studio.jpg" alt="Студийная" width={300} height={200} />
          <h3>Студийная</h3>
        </div>
      </div>
    </section>
  );
} 