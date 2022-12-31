import Link from "next/link";
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import styles from "@/styles/Home.module.css";

const HomePage = () => {
  return (
    <Layout>
      <div className={styles.head}>
        <h2>Najbliższe zawody</h2>
        <Link href={"/meets"} className='btn btn-secondary btn-black btn-sm'>
          Zobacz wszystkie
        </Link>
      </div>
      <div className={styles.cardList}>
        <Card />
        <Card />
        <Card />
      </div>
    </Layout>
  );
};

export default HomePage;
