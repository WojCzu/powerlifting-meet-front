import Link from "next/link";
import DumbbellIcon from "/public/icons/icon-dumbbell.svg";
import styles from "../styles/Logo.module.css";

const Logo = () => (
  <div className={styles.logo}>
    <Link href={"/"}>
      <DumbbellIcon />
      <span>Powerlifting meet</span>
    </Link>
  </div>
);

export default Logo;
