'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import BookingForm from '../BookingForm/BookingForm';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <h3>Photochki</h3>
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
            <li><Link href="/portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</Link></li>
            <li><Link href="/#services" onClick={() => setIsMenuOpen(false)}>Services and prices</Link></li>
            <li><Link href="/#about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            {/* <li><Link href="/reviews" onClick={() => setIsMenuOpen(false)}>Reviews</Link></li>
            <li><Link href="/contacts" onClick={() => setIsMenuOpen(false)}>Contacts</Link></li> */}
          </ul>
        </nav>

        <button 
          className={styles.orderButton}
          onClick={() => setIsBookingFormOpen(true)}
        >
          Book a photo session
        </button>
      </div>

      <BookingForm 
        isOpen={isBookingFormOpen}
        onClose={() => setIsBookingFormOpen(false)}
      />
    </header>
  );
} 