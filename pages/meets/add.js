import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuid } from "uuid";
import Layout from "@/components/Layout";
import BasicInfo from "@/components/meetForm/BasicInfo";
import Competitions from "@/components/meetForm/Competitions";
import Description from "@/components/meetForm/Description";
import MeetFormNav from "@/components/meetForm/MeetFormNav";
import styles from "@/styles/AddMeet.module.css";

const STEP_TITLE = {
  1: "Podstawowe informacje",
  2: "Opis wydarzenia",
  3: "Konkurencje i zasady",
};
const POSSIBLE_STEPS = ["1", "2", "3"];

const AddMeetPage = () => {
  const router = useRouter();
  const [values, setValues] = useState({
    // step 1
    meet_name: "",
    federation: "",
    country: "",
    city: "",
    start_date: "",
    end_date: "",
    // step 2
    description: "",
    url: "",
    // step 3
    competitions: [{ id: uuid(), competition_name: "", rules: "" }],
  });

  const getPage = step => {
    switch (step) {
      case POSSIBLE_STEPS[0]:
        return <BasicInfo handleChange={handleFormChange} values={values} />;
      case POSSIBLE_STEPS[1]:
        return <Description handleChange={handleFormChange} values={values} />;
      case POSSIBLE_STEPS[2]:
        return (
          <Competitions
            handleChange={handleFormChange}
            values={values}
            handleAdd={handleAddCompetition}
            handleDelete={handleDeleteCompetition}
          />
        );
      default:
        router.push("/404");
    }
  };

  const handleChangeStep = (currentStep, direction) => {
    const nextStep = parseInt(currentStep, 10) + direction;
    router.push(`${router.pathname}?step=${nextStep}`);
  };

  const handleAddCompetition = () => {
    const emptyCompetition = { id: uuid(), competition_name: "", rules: "" };
    setValues({
      ...values,
      competitions: [...values.competitions, emptyCompetition],
    });
  };

  const handleDeleteCompetition = id => {
    const { competitions } = values;
    const filteredCompetitions = competitions.filter(
      competition => competition.id !== id
    );
    setValues({
      ...values,
      competitions: [...filteredCompetitions],
    });
  };

  const handleFormChange = e => {
    const { inputid } = e.target.dataset;

    if (inputid !== undefined) {
      const updatedCompetitions = values.competitions.map(competition => {
        if (inputid === competition.id) {
          return { ...competition, [e.target.name]: e.target.value };
        }
        return competition;
      });
      setValues({ ...values, competitions: [...updatedCompetitions] });
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const {
      meet_name,
      federation,
      country,
      city,
      start_date,
      end_date,
      description,
      url,
      competitions,
    } = values;

    if (
      meet_name === "" ||
      city === "" ||
      start_date === "" ||
      end_date === "" ||
      haveEmptyField(competitions)
    ) {
      toast.error("Uzupełnij wszystkie niezbędne pola!");
    }
  };

  const haveEmptyField = arr => {
    let isEmpty = false;
    arr.forEach(obj => {
      if (Object.values(obj).includes("")) {
        isEmpty = true;
      }
    });
    return isEmpty;
  };

  const step =
    (POSSIBLE_STEPS.includes(router.query.step) && router.query.step) ||
    POSSIBLE_STEPS[0];

  const nextButton =
    step === POSSIBLE_STEPS.at(-1) ? (
      <button type='submit' className='btn'>
        Zapisz
      </button>
    ) : (
      <button
        type='button'
        className='btn'
        onClick={() => handleChangeStep(step, 1)}
      >
        Dalej
      </button>
    );

  return (
    <Layout title='Dodaj zawody' className='bg'>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h1>{STEP_TITLE[step]}</h1>
            <span>Krok {step} z 3</span>
          </div>
          <MeetFormNav steps={POSSIBLE_STEPS} currentStep={step} />
          <form className={styles.form} onSubmit={handleSubmit}>
            {getPage(step)}
            <div className={styles.buttonContainer}>
              <button
                type='button'
                className='btn btn-secondary'
                onClick={() => handleChangeStep(step, -1)}
                disabled={step === "1"}
              >
                Wstecz
              </button>
              {nextButton}
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default AddMeetPage;
