import styles from "@/styles/Filter.module.css";
import { useState } from "react";

const MAX_OPTIONS = 4;

const Filter = ({ title, options }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleOptions = isExpanded ? options : options.slice(0, MAX_OPTIONS);
  return (
    <div className={styles.filter}>
      <div className={styles.title}>{title}</div>
      <ul className={styles.options}>
        {visibleOptions.map(option => (
          <li key={option}>
            <label htmlFor={option}>{option}</label>
            <input type='checkbox' name={option} id={option} />
          </li>
        ))}
      </ul>
      {visibleOptions.length !== options.length && (
        <button
          onClick={() => setIsExpanded(true)}
          className='btn btn-tertiary'
        >
          Zobacz więcej ({options.length - MAX_OPTIONS})
        </button>
      )}
    </div>
  );
};

export default Filter;
