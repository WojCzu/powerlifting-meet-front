import Image from "next/image";
import { useAuth } from "@/hooks/useAuth";
import BookmarkIcon from "@/icons/bookmark.svg";
import EditIcon from "@/icons/edit.svg";
import DeleteIcon from "@/icons/delete.svg";
import CalendarIcon from "@/icons/calendar.svg";
import PinIcon from "@/icons/pin.svg";
import ListStyle from "@/icons/list-style.svg";
import styles from "@/styles/Card.module.css";
import Link from "next/link";
import { useState } from "react";

const mockData = {
  name: "Mistrzostwa Polski Polskiej Unii Trójboju Siłowego",
  slug: "mistrzostwa-polski-polskiej-unii-trójboju-siłowego",
  federation: "Polska Unia Trójboju Siłowego",
  date: "18-19.03.2023",
  location: "Zalesie (Polska)",
  competitions: [
    "Trójbój, RAW",
    "Wyciskanie leżąc, RAW/EQ",
    "Martwy ciąg, RAW",
    "Przysiad, RAW",
  ],
  saved: false,
};

const Card = ({ isCompact, isEditable }) => {
  const { name, federation, date, location, competitions, slug, saved } =
    mockData;
  const { user } = useAuth();
  const [isSaved, setIsSaved] = useState(saved);

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  const handleDelete = () => {
    console.log("delete");
  };

  return (
    <div className={styles.card}>
      <Image
        width={isCompact ? 215 : 300}
        height={210}
        alt='Zdjęcie zawodów trójboju siłowego'
        src='/images/placeholder.jpg'
      />
      <div className={styles.content}>
        <div className={styles.topContainer}>
          <div>
            <div className={styles.title}>{name}</div>
            <div className={styles.subtitle}>{federation}</div>
          </div>
          <div className={styles.icons}>
            {isEditable && (
              <>
                <Link href={`/meets/${slug}/edit`} className='icon icon-black'>
                  <EditIcon />
                </Link>
                <button className='icon icon-black' onClick={handleDelete}>
                  <DeleteIcon />
                </button>
              </>
            )}
            {user && (
              <button
                className={`icon${isSaved ? " active" : ""}`}
                onClick={handleSave}
              >
                <BookmarkIcon />
              </button>
            )}
          </div>
        </div>

        <div className={styles.bottomContainer}>
          <ul>
            <li>
              <CalendarIcon />
              {date}
            </li>
            <li>
              <PinIcon />
              {location}
            </li>
          </ul>

          <ul>
            {competitions.map(competition => (
              <li key={competition}>
                <ListStyle role='presentation' />
                {competition}
              </li>
            ))}
          </ul>
          <Link href={`/meets/${slug}`} className='btn'>
            Zobacz więcej
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

Card.defaultProps = {
  isCompact: false,
  isEditable: false,
};
