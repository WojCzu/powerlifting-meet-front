import Link from "next/link";
import Layout from "@/components/Layout";
import styles from "@/styles/404.module.css";

const NotFoundPage = () => {
  return (
    <Layout title='Nie znaleziono strony' className='bg bg-error'>
      <div className={styles.container}>
        <div>404</div>
        <h1>Nie znaleziono strony</h1>
        <Link href={"/"} className={"btn"}>
          Zabierz mnie stąd
        </Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
