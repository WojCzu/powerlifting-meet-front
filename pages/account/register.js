import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import { toast } from "react-toastify";
import Layout from "@/components/Layout";
import Input from "@/components/Input";
import styles from "@/styles/Register.module.css";

const RegisterPage = () => {
  const router = useRouter();
  const { register } = useAuth();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = e => {
    e.preventDefault();
    if (!username || !email || !password || !confirmPassword) {
      toast.error("Wypełnij wszystkie pola");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Hasła muszą być takie same");
      return;
    }
    register({ username, email, password });
  };
  return (
    <Layout title='Zarejestruj się' className='bg'>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Dołącz i znajdź tu coś dla siebie</h1>
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
          <form onSubmit={handleRegister} className={styles.form}>
            <Input
              label='Nazwa użytkownika'
              id='username'
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
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
            <Input
              label='Powtórz hasło'
              type='password'
              id='confirmPassword'
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />
            <input type='submit' value='Zaloguj się' className='btn' />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default RegisterPage;

const activeLink = (url, pathname) =>
  pathname === url ? styles.activeLink : "";
