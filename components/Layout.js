import Head from "next/head";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "@/styles/Layout.module.css";

const Layout = ({ title, keywords, description, className, children }) => {
  const getMainLayoutStyles = className => {
    const classNames = className.split(" ");
    const mainClasses = [styles.main];
    if (classNames.includes("bg")) mainClasses.push(styles.bg);
    if (classNames.includes("bg-error")) mainClasses.push(styles.error);
    return mainClasses.join(" ");
  };
  return (
    <div className={styles.layout}>
      <Head>
        <title>{title + " - Powerlifting Meet"}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Header />
      <main className={getMainLayoutStyles(className)}>
        <div className={styles.container}>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Zawody Trójbojowe",
  description:
    "Znajdź najbliższe zawody trójboju siłowegom, wszystkie najważniejsze wydarzenia trójbojowe w jednym miejscu",
  keywords:
    "powerlifting, powerlifting meets, bench press, deadlift, squat, competition, trójbój, wyciskanie leżąc, martwy ciąg, zawody",
  className: "",
};

export default Layout;
