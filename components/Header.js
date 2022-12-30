import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import Logo from "@/components/Logo";
import styles from "@/styles/Header.module.css";
import { useRouter } from "next/router";
import Showcase from "./Showcase";

const Header = () => {
  const router = useRouter();
  const { user, logout } = useAuth();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        {!["/account/login", "/account/register"].includes(router.pathname) && (
          <nav>
            <ul>
              <li>
                <Link href={"/meets"}>Zawody</Link>
              </li>
              {user ? (
                <AuthenticatedRoutes logout={logout} />
              ) : (
                <UnAuthenticatedRoutes />
              )}
            </ul>
          </nav>
        )}
      </div>
      {router.pathname === "/" && <Showcase />}
    </header>
  );
};

export default Header;

const AuthenticatedRoutes = ({ logout }) => (
  <>
    <li>
      <Link href={"/account/meets"}>Moje zawody</Link>
    </li>
    <li>
      <Link href={"/account/calendar"}>Mój kalendarz</Link>
    </li>
    <li>
      <button onClick={logout}>Wyloguj</button>
    </li>
  </>
);

const UnAuthenticatedRoutes = () => (
  <>
    <li>
      <Link href={"/account/login"}>Zaloguj się</Link>
    </li>
    <li>
      <Link href={"/account/register"} className='btn'>
        Zarejestruj się
      </Link>
    </li>
  </>
);
