import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          <h3>Photochki</h3>
          <p className={styles.footerText}>
            Профессиональная фотосъемка для любых событий
          </p>
        </div>

        <div className={styles.footerLinks}>
          <div className={styles.linkGroup}>
            <h3>Контакты</h3>
            <ul>
              <li>
                <a href="tel:+79999999999">+7 (999) 999-99-99</a>
              </li>
              <li>
                <a href="mailto:info@photographer.ru">info@photographer.ru</a>
              </li>
              <li>г. Москва, ул. Примерная, д. 1</li>
            </ul>
          </div>

          <div className={styles.linkGroup}>
            <h3>Социальные сети</h3>
            <ul className={styles.socialLinks}>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  VK
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Фотограф. Все права защищены.</p>
      </div>
    </footer>
  );
} 