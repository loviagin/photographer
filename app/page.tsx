import Hero from "./components/Hero";
import Features from "./components/Features";
import Categories from "./components/Categories";
import Reviews from "./components/Reviews";
import Booking from "./components/Booking";
import About from "./components/About";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Features />
      {/* <Categories />
      <Reviews />
      <Booking />
      <About /> */}
    </main>
  );
}
