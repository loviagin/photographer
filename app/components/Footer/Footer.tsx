import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          <h3>Photochki</h3>
          <p className={styles.footerText}>
            Professional photography for any events
          </p>
        </div>

        <div className={styles.footerLinks}>
          

          <div className={styles.linkGroup}>
            {/* <h3>Социальные сети</h3>
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
            </ul>*/}
          </div>

          <div className={styles.linkGroup}>
            <h3>Contacts</h3>
            <ul>
              <li>
                <a href="tel:+19048359485">+1 904 835 94 85</a>
              </li>
              <li>
                <a href="mailto:voroninsfamilyllc@gmail.com">voroninsfamilyllc@gmail.com</a>
              </li>
              <li>St. Augustine, FL, USA</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Photographer. All rights reserved.</p>
      </div>
    </footer>
  );
} 