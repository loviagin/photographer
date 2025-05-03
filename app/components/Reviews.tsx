import Image from 'next/image';
import styles from './Reviews.module.css';

export default function Reviews() {
  return (
    <section className={styles.reviews}>
      <h2>Отзывы клиентов</h2>
      <div className={styles.reviewsGrid}>
        <div className={styles.reviewCard}>
          <div className={styles.reviewHeader}>
            <Image
              src="/reviews/client1.jpg"
              alt="Клиент 1"
              width={60}
              height={60}
              className={styles.reviewAvatar}
            />
            <div className={styles.reviewInfo}>
              <h3>Анна</h3>
              <p>Love Story съемка</p>
            </div>
          </div>
          <p className={styles.reviewText}>
            "Очень довольна результатом! Фотографии получились невероятно красивыми и атмосферными. Спасибо за профессионализм и внимание к деталям."
          </p>
        </div>

        <div className={styles.reviewCard}>
          <div className={styles.reviewHeader}>
            <Image
              src="/reviews/client2.jpg"
              alt="Клиент 2"
              width={60}
              height={60}
              className={styles.reviewAvatar}
            />
            <div className={styles.reviewInfo}>
              <h3>Михаил</h3>
              <p>Семейная съемка</p>
            </div>
          </div>
          <p className={styles.reviewText}>
            "Отличная работа! Фотограф смог найти подход к детям, и все получилось естественно и непринужденно. Рекомендую!"
          </p>
        </div>

        <div className={styles.reviewCard}>
          <div className={styles.reviewHeader}>
            <Image
              src="/reviews/client3.jpg"
              alt="Клиент 3"
              width={60}
              height={60}
              className={styles.reviewAvatar}
            />
            <div className={styles.reviewInfo}>
              <h3>Елена</h3>
              <p>Детская съемка</p>
            </div>
          </div>
          <p className={styles.reviewText}>
            "Прекрасные фотографии! Ребенок был в восторге от процесса съемки, а результат превзошел все ожидания."
          </p>
        </div>
      </div>
    </section>
  );
} 