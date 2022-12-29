import Link from "next/link";
import Logo from "./Logo";
import EmailIcon from "../public/icons/icon-email.svg";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <Logo />
          <p>Wszystkie najważniejsze wydarzenia trójbojowe w jednym miejscu.</p>
        </div>
        <div className={styles.section}>
          <div className={styles.title}>Kontakt</div>
          <span className={styles.email}>
            <EmailIcon />
            power_meet@gmail.com
          </span>
        </div>
        <div className={styles.section}>
          <div className={styles.title}>Mapa Strony</div>
          <nav>
            <ul className={styles.list}>
              <li>
                <Link href={"/"}>Strona główna</Link>
              </li>
              <li>
                <Link href={"/meets"}>Zawody</Link>
              </li>
              <li>
                <Link href={"/meets/my"}>Moje zawody</Link>
              </li>
              <li>
                <Link href={"/calendar"}>Mój kalendarz</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
