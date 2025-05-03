import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Запечатлим лучшие моменты вашей жизни</h1>
          <p className={styles.heroSubtitle}>Профессиональная фотосъемка для любых событий</p>
          <div className={styles.heroButtons}>
            <button className={styles.primaryButton}>Записаться на фотосессию</button>
            <button className={styles.secondaryButton}>Посмотреть портфолио</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.feature}>
          <h3>10 лет опыта</h3>
          <p>Профессиональная работа с клиентами</p>
        </div>
        <div className={styles.feature}>
          <h3>Профессиональная техника</h3>
          <p>Современное оборудование для качественных снимков</p>
        </div>
        <div className={styles.feature}>
          <h3>Индивидуальный подход</h3>
          <p>Уникальные решения для каждого клиента</p>
        </div>
      </section>

      {/* Categories Section */}
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

      {/* Reviews Section */}
      <section className={styles.reviews}>
        <h2>Отзывы клиентов</h2>
        <div className={styles.reviewsCarousel}>
          {/* Reviews will be added here */}
        </div>
      </section>

      {/* Quick Booking Form */}
      <section className={styles.booking}>
        <h2>Записаться на фотосессию</h2>
        <form className={styles.bookingForm}>
          <input type="text" placeholder="Ваше имя" required />
          <input type="tel" placeholder="Телефон" required />
          <input type="email" placeholder="Email" required />
          <select required>
            <option value="">Тип съёмки</option>
            <option value="love-story">Love Story</option>
            <option value="family">Семейная</option>
            <option value="children">Детская</option>
            <option value="studio">Студийная</option>
          </select>
          <input type="date" required />
          <button type="submit" className={styles.primaryButton}>Отправить заявку</button>
        </form>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <h2>О фотографе</h2>
            <p>Профессиональный фотограф с 10-летним опытом работы. Специализируюсь на создании уникальных и запоминающихся фотографий, которые рассказывают вашу историю.</p>
            <p>Моя цель - запечатлеть искренние эмоции и создать фотографии, которые будут радовать вас долгие годы.</p>
          </div>
          <div className={styles.aboutImage}>
            <Image src="/photographer.jpg" alt="Фотограф" width={400} height={500} />
          </div>
        </div>
      </section>
    </main>
  );
}
