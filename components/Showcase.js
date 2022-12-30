import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import styles from "@/styles/Showcase.module.css";

const Showcase = () => {
  const { user } = useAuth();
  return (
    <div className={styles.showcase}>
      <div className={styles.container}>
        <h1>Wszystkie najważniejsze wydarzenia trójbojowe w jednym miejscu</h1>
        {!user && <UnAuthenticatedShowcase />}
      </div>
    </div>
  );
};

export default Showcase;

const UnAuthenticatedShowcase = () => (
  <>
    <div>Dołącz i utwórz własny kalendarz</div>
    <Link href={"/account/register"} className='btn'>
      Dołącz teraz
    </Link>
  </>
);
