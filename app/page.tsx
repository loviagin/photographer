import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Categories from "./components/Categories/Categories";
import Reviews from "./components/Reviews/Reviews";
import Booking from "./components/Booking/Booking";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import CTA from "./components/CTA/CTA";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <Services />
      <CTA />
      {/* <Features /> */}
    </main>
  );
}
