import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import { toast } from "react-toastify";
import Layout from "@/components/Layout";
import Input from "@/components/Input";
import styles from "@/styles/Login.module.css";

const LoginPage = () => {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = e => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Wypełnij wszystkie pola");
      return;
    }
    login({ email, password });
  };
  return (
    <Layout title='Zaloguj się' className='bg'>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Witaj ponownie!</h1>
          <nav>
            <ul>
              <li className={activeLink("/account/login", router.pathname)}>
                <Link href={"/account/login"}>Zaloguj się</Link>
              </li>
              <li className={activeLink("/account/register", router.pathname)}>
                <Link href={"/account/register"}>Zarejestruj się</Link>
              </li>
            </ul>
          </nav>
          <form onSubmit={handleLogin} className={styles.form}>
            <Input
              label='Email'
              type='email'
              id='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <Input
              label='Hasło'
              type='password'
              id='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <input type='submit' value='Zaloguj się' className='btn' />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;

const activeLink = (url, pathname) =>
  pathname === url ? styles.activeLink : "";
