import Input from "@/components/Input";
import styles from "@/styles/AddMeet.module.css";

const BasicInfo = ({ values, handleChange }) => {
  const { meet_name, federation, country, city, start_date, end_date } = values;
  return (
    <>
      <Input
        onChange={handleChange}
        label='Nazwa wydarzenia*'
        id='meet_name'
        name='meet_name'
        value={meet_name}
      />
      <Input
        onChange={handleChange}
        label='Federacja'
        id='federation'
        name='federation'
        value={federation}
      />
      <div className={styles.inputContainer}>
        <Input
          onChange={handleChange}
          label='Państwo'
          id='country'
          name='country'
          value={country}
        />
        <Input
          onChange={handleChange}
          label='Miasto*'
          id='city'
          name='city'
          value={city}
        />
      </div>
      <div className={styles.inputContainer}>
        <Input
          onChange={handleChange}
          label='Od daty*'
          type='date'
          id='start_date'
          name='start_date'
          value={start_date}
        />
        <Input
          onChange={handleChange}
          label='Do daty*'
          type='date'
          id='end_date'
          name='end_date'
          value={end_date}
        />
      </div>
    </>
  );
};
export default BasicInfo;
