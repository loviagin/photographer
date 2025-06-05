import Image from 'next/image';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.aboutContent}>
        <div className={styles.aboutImage}>
          <Image
            src="/me.webp"
            alt="Photographer"
            width={400}
            height={500}
            className={styles.photographerImage}
          />
        </div>
        <div className={styles.aboutText}>
          <h2>About me</h2>
          <p className={styles.aboutDescription}>
            Hi! My name is Vladimir Voronin, and I am a professional photographer with 20 years of experience.
            My passion for photography began when I was a child, and since then I have been perfecting my skills,
            to create unique and emotional images.
          </p>
          <p className={styles.aboutDescription}>
            I specialize in various types of photography, including Love Story, family and children photo sessions,
            as well as studio photography. Each project for me is an opportunity to create something special
            and capture important moments in the lives of my clients.
          </p>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>20+</span>
              <span className={styles.statLabel}>years of experience</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>500+</span>
              <span className={styles.statLabel}>happy clients</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>1000+</span>
              <span className={styles.statLabel}>successful shoots</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 