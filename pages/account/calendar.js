import Layout from "@/components/Layout";
import Card from "@/components/Card";
import BookmarkIcon from "@/icons/bookmark.svg";
import Calendar from "@/icons/calendar-search.svg";
import styles from "@/styles/Calendar.module.css";

const CalendarPage = () => {
  return (
    <Layout title='Kalendarz zawodów'>
      <div className={styles.head}>
        <h1>Zapisane zawody</h1>
      </div>
      <div>
        <div className={styles.content}>
          <div>
            <div className={styles.sidebar}>
              <div>
                <BookmarkIcon />
                <span>Zapisanych:</span> 3
              </div>
              <div>
                <Calendar />
                <span>Najbliższe za:</span> 10 dni
              </div>
            </div>
          </div>
          <div className={styles.cardList}>
            <Card isCompact />
            <Card isCompact />
            <Card isCompact />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CalendarPage;
