import Input from "@/components/Input";
import styles from "@/styles/AddMeet.module.css";

const Competitions = ({ values, handleChange, handleAdd, handleDelete }) => {
  const { competitions } = values;

  return (
    <>
      {competitions.map(({ id, competition_name, rules }, _, arr) => (
        <div className={styles.competition} key={id}>
          <Input
            onChange={handleChange}
            label='Konkurencja*'
            id={`competition_name_${id}`}
            name='competition_name'
            value={competition_name}
            data-inputid={id}
          />
          <Input
            onChange={handleChange}
            label='Zasady*'
            id={`rules_${id}`}
            name='rules'
            value={rules}
            data-inputid={id}
          />
          {arr.length > 1 && (
            <button
              className='btn btn-secondary'
              onClick={() => handleDelete(id)}
            >
              Usuń
            </button>
          )}
        </div>
      ))}
      <button
        type='button'
        className={`btn btn-tertiary ${styles.addCompetitionButton}`}
        onClick={handleAdd}
      >
        Dodaj konkurencję
      </button>
    </>
  );
};

export default Competitions;
