import Image from "next/image";
import AccessCard from "@/components/auth/AccessCard";
import WelcomePanel from "@/components/home/WelcomePanel"; 
import styles from "./HomeHero.module.css";

export default function HomeHero() {
  return (
    <section className={`${styles.hero} position-relative flex-grow-1 text-on-dark`}>
      <Image
        src="/images/home-hero-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className={styles.backgroundImage}
      />
      <div className={styles.overlay} aria-hidden="true" />
      <div className={`${styles.inner} position-relative d-flex flex-wrap align-items-center mx-auto`}>
        <div className={styles.welcomeColumn}>
          <WelcomePanel />
        </div>
        <div className={styles.accessColumn}>
          <AccessCard />
        </div>
      </div>
    </section>
  );
}
