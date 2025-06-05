"use client"
import { useState } from 'react';
import styles from './Services.module.css';
import BookingForm from '../BookingForm/BookingForm';
import { FaCamera } from 'react-icons/fa';
import { MdOutlinePhoto } from "react-icons/md";
import { MdOutlineWorkspacePremium } from "react-icons/md";

export default function Services() {
    const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);

    return (
        <section className={styles.services} id="services">
            <div className={styles.servicesContent}>
                <h2 className={styles.servicesTitle}>Services and prices</h2>
                <p className={styles.servicesSubtitle}>
                    St. Augustine Photoshoot Pricing Guide
                </p>
                <div className={styles.servicesGrid}>
                    <div className={styles.serviceCard}>
                        <div className={styles.serviceIcon}>
                            <FaCamera size={40} />
                        </div>
                        <h3>Signature Photo Walk "In the Heart of St. Augustine"</h3>
                        <ul className={styles.serviceFeatures}>
                            <li>Duration: 1.5–2 hours</li>
                            <li>Locations: we choose together — historic downtown, lighthouse, beaches, or parks</li>
                            <li>Planning: before the shoot, you'll fill out a short questionnaire to help us define the mood, style, and vision.
                                Optional add-ons: professional makeup and styling available upon request (additional fee)</li>
                            <li>Participants: up to 5 people (+$25 for each additional person)</li>
                            <li>Includes: 10 high-resolution, artistically retouched photos</li>
                            <li>Extras: additional edited images available at $30 each</li>
                        </ul>
                        <div className={styles.servicePrice}>
                            <span className={styles.price}>$350</span>
                            <span className={styles.priceLabel}>per session</span>
                        </div>
                        <button className={styles.serviceButton} onClick={() => setIsBookingFormOpen(true)}>
                            Book a photo session
                        </button>
                    </div>

                    <div className={styles.serviceCard}>
                        <div className={styles.serviceIcon}>
                            <MdOutlinePhoto size={40} />
                        </div>
                        <h3>Light & Casual Session "In Style"</h3>
                        <ul className={styles.serviceFeatures}>
                            <li>Duration: 45–90 minutes</li>
                            <li>Locations: historic downtown — selected to match light and weather conditions</li>
                            <li>Versatile: I know the best spots for any light — from bright sunshine to overcast mornings</li>
                            <li>Participants: up to 4 people (+$25 for each additional person beyond 4)</li>
                            <li>Includes: 5 retouched images</li>
                            <li>Extras: additional edited images available at $30 each</li>
                        </ul>
                        <div className={styles.servicePrice}>
                            <span className={styles.price}>$240</span>
                            <span className={styles.priceLabel}>per session</span>
                        </div>
                        <button className={styles.serviceButton} onClick={() => setIsBookingFormOpen(true)}>
                            Book a photo session
                        </button>
                        <div className={styles.serviceNote}>
                            This session is perfect for those who want a relaxed walk around the city without posing. Just be yourself — I'll capture your real moments. The most magical light? Always during golden hour — sunrise or sunset.
                        </div>
                    </div>

                    <div className={styles.serviceCard}>
                        <div className={styles.serviceIcon}>
                            <MdOutlineWorkspacePremium size={40} />
                        </div>
                        <h3>"All-Inclusive" Custom Package</h3>
                        <ul className={styles.serviceFeatures}>
                            <li>Includes one extended session or a multi-part session. Total shooting time: 2 to 5 hours.</li>
                            <li>Maternity photoshoot</li>
                            <li>Newborn lifestyle session</li>
                            <li>Commercial photography</li>
                            <li>Event or corporate reportage</li>
                            <li>Special calendar or long-term creative projects (custom quotes available)</li>
                            <li>Optional: makeup and styling services available upon request</li>
                            <li>20 professionally retouched photos (edited by an internationally acclaimed retoucher) + full digital gallery</li>
                            <li>Gift: three 11×17 prints or one 20×24 canvas print</li>
                            <li>Bonus: 30% discount on printed products and photo albums</li>
                        </ul>
                        <div className={styles.servicePrice}>
                            <span className={styles.price}>$900 – $1800</span>
                            <span className={styles.priceLabel}>per session</span>
                        </div>
                        <button className={styles.serviceButton} onClick={() => setIsBookingFormOpen(true)}>
                            Book a photo session
                        </button>
                    </div>
                </div>
            </div>

            <BookingForm
                isOpen={isBookingFormOpen}
                onClose={() => setIsBookingFormOpen(false)}
            />
        </section>
    );
} 