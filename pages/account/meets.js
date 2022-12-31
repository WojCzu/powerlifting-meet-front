import Link from "next/link";
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import AddIcon from "@/icons/add.svg";
import Calendar from "@/icons/calendar-search.svg";
import styles from "@/styles/MyMeets.module.css";

const MyMeetsPage = () => {
  return (
    <Layout title='Moje zawody'>
      <div className={styles.head}>
        <h1>Moje zawody</h1>
      </div>
      <div>
        <div className={styles.content}>
          <div>
            <div className={styles.sidebar}>
              <div>
                <AddIcon />
                <span>Moje zawody:</span> 3
              </div>
              <div>
                <Calendar />
                <span>Najbliższe za:</span> 12 dni
              </div>
              <Link href='/meets/add' className='btn btn-black'>
                Dodaj wydarzenie
              </Link>
            </div>
          </div>
          <div className={styles.cardList}>
            <Card isCompact isEditable />
            <Card isCompact isEditable />
            <Card isCompact isEditable />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyMeetsPage;
