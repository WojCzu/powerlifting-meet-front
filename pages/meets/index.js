import Layout from "@/components/Layout";
import Card from "@/components/Card";
import styles from "@/styles/Meets.module.css";
import Filter from "@/components/Filter";

const MeetsPage = () => {
  return (
    <Layout title='Wszystkie zawody'>
      <div className={styles.head}>
        <h1>Dostosuj preferencje i znajdź zawody dla siebie</h1>
      </div>
      <div>
        <span className={styles.results}>Znaleziono 81 pasujących zawodów</span>
        <div className={styles.content}>
          <div className={styles.sidebar}>
            <Filter
              title={"Konkurencje"}
              options={[
                "Trójbój",
                "Przysiad",
                "Wyciskanie leżąc",
                "Martwy Ciąg",
              ]}
            />
            <Filter
              title={"Zasady"}
              options={[
                "Raw",
                "Raw + wraps",
                "Equipped Single-Ply",
                "Equipped Multi-Ply",
              ]}
            />
            <Filter
              title={"Federacje"}
              options={[
                "Polska Unia Trójboju Siłowego",
                "Polaska Liga Trójboju RAW",
                "XPC",
                "IPF",
                "WRPF",
                "GPA/IPO",
                "GPC",
                "WUAP",
                "WPA",
                "WPC",
              ]}
            />
          </div>
          <div className={styles.cardList}>
            <Card isCompact />
            <Card isCompact />
            <Card isCompact />
            <Card isCompact />
            <Card isCompact />
            <Card isCompact />
            <Card isCompact />
            <Card isCompact />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MeetsPage;
