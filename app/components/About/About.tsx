import Image from 'next/image';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContent}>
        <div className={styles.aboutImage}>
          <Image
            src="/about-photo.jpg"
            alt="Фотограф"
            width={400}
            height={500}
            className={styles.photographerImage}
          />
        </div>
        <div className={styles.aboutText}>
          <h2>О фотографе</h2>
          <p className={styles.aboutDescription}>
            Привет! Меня зовут [Имя], и я профессиональный фотограф с 10-летним опытом работы.
            Моя страсть к фотографии началась еще в детстве, и с тех пор я совершенствую свое мастерство,
            чтобы создавать уникальные и эмоциональные снимки.
          </p>
          <p className={styles.aboutDescription}>
            Я специализируюсь на различных видах съемки, включая Love Story, семейные и детские фотосессии,
            а также студийную съемку. Каждый проект для меня - это возможность создать что-то особенное
            и запечатлеть важные моменты жизни моих клиентов.
          </p>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>10+</span>
              <span className={styles.statLabel}>лет опыта</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>500+</span>
              <span className={styles.statLabel}>счастливых клиентов</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>1000+</span>
              <span className={styles.statLabel}>успешных съемок</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 