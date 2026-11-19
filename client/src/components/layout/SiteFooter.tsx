import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <ScrollReveal>
        <div className={`${styles.inner} t-caption`}>
          <div className={styles.group}>
            <a href="https://4tomorrow.com.au/" aria-label="4tomorrow home" className="d-flex">
              <Image
                src="/images/footer-logo.png"
                alt="4tomorrow"
                width={131}
                height={20}
              />
            </a>
            <span>© 2026 4tomorrow · ABN 54 673 161 049</span>
          </div>
          <nav aria-label="Footer" className={styles.group}>
            <a href="tel:1300055444" className={styles.plainLink}>
              1300 055 444
            </a>
            <a href="mailto:info@4tomorrow.com.au" className={styles.plainLink}>
              info@4tomorrow.com.au
            </a>
            <a href="https://4tomorrow.com.au" className={styles.link}>
              Privacy Policy
            </a>
            <a href="https://4tomorrow.com.au" className={styles.link}>
              Terms and Conditions
            </a>
          </nav>
        </div>
      </ScrollReveal>
    </footer>
  );
}
