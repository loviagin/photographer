'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo.png"
            alt="Логотип фотографа"
            width={150}
            height={50}
            priority
          />
        </Link>

        <button 
          className={styles.mobileMenuButton}
          onClick={toggleMenu}
          aria-label="Меню"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          <ul className={styles.navList}>
            <li><Link href="/portfolio" onClick={() => setIsMenuOpen(false)}>Портфолио</Link></li>
            <li><Link href="/services" onClick={() => setIsMenuOpen(false)}>Услуги и цены</Link></li>
            <li><Link href="/about" onClick={() => setIsMenuOpen(false)}>О нас</Link></li>
            <li><Link href="/reviews" onClick={() => setIsMenuOpen(false)}>Отзывы</Link></li>
            <li><Link href="/contacts" onClick={() => setIsMenuOpen(false)}>Контакты</Link></li>
          </ul>
        </nav>

        <button className={styles.orderButton}>
          Записаться на фотосессию
        </button>
      </div>
    </header>
  );
} 