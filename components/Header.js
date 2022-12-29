import Link from "next/link";
import styles from "../styles/Header.module.css";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <nav>
          <ul>
            <li>
              <Link href={"/meets"}>Zawody</Link>
            </li>
            <li>
              <Link href={"/meets/my"}>Moje zawody</Link>
            </li>
            <li>
              <Link href={"/calendar"}>Mój kalendarz</Link>
            </li>
            <li>
              <button>Wyloguj</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
