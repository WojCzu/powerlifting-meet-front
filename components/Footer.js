import Link from "next/link";
import Logo from "@/components/Logo";
import EmailIcon from "@/icons/email.svg";
import styles from "@/styles/Footer.module.css";

const Footer = () => {
  const user = false; //TODO: connect with database
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
              {user ? <AuthenticatedRoutes /> : <UnAuthenticatedRoutes />}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const AuthenticatedRoutes = () => (
  <>
    <li>
      <Link href={"/account/meets"}>Moje zawody</Link>
    </li>
    <li>
      <Link href={"/account/calendar"}>Mój kalendarz</Link>
    </li>
  </>
);

const UnAuthenticatedRoutes = () => (
  <>
    <li>
      <Link href={"/account/login"}>Zaloguj się</Link>
    </li>
    <li>
      <Link href={"/account/register"}>Zarejestruj się</Link>
    </li>
  </>
);
