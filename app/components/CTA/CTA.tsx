"use client"
import { useState } from 'react';
import styles from './CTA.module.css';
import BookingForm from '../BookingForm/BookingForm';

const CTA = () => {
    const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);

    return (
        <section className={styles.cta}>
            <div className={styles.container}>
                <h2 className={styles.title}>Capture your special moments</h2>
                <p className={styles.description}>
                    Professional photography is not just about photos, it's about capturing your emotions,
                    feelings and memories that will stay with you forever
                </p>
                <button className={styles.button} onClick={() => setIsBookingFormOpen(true)}>
                    Book a photo session
                </button>
            </div>

            <BookingForm
                isOpen={isBookingFormOpen}
                onClose={() => setIsBookingFormOpen(false)}
            />
        </section>
    );
};

export default CTA; 