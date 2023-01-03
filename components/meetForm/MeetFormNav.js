import Link from "next/link";
import CalendarIcon from "@/icons/calendar-solo.svg";
import FilesIcon from "@/icons/files.svg";
import GymIcon from "@/icons/gym.svg";
import TickIcon from "@/icons/tick.svg";
import styles from "@/styles/AddMeet.module.css";

const MeetFormNav = ({ steps, currentStep }) => {
  const isLinkActive = (currentStep, step) => {
    if (currentStep === step) {
      return styles.active;
    }
    if (isStepPast(currentStep, step)) return styles.past;
    return "";
  };

  const isStepPast = (currentStep, step) => {
    const currentStepIndex = steps.findIndex(
      possibleStep => possibleStep === currentStep
    );
    const stepIndex = steps.findIndex(possibleStep => possibleStep === step);
    if (stepIndex < currentStepIndex) {
      return true;
    }
    return false;
  };
  return (
    <nav>
      <ul>
        <li className={`${isLinkActive(currentStep, "1")}`}>
          <Link href='/meets/add?step=1'>
            {isStepPast(currentStep, "1") ? <TickIcon /> : <CalendarIcon />}
          </Link>
        </li>
        <li
          className={`${isLinkActive(currentStep, "1")} ${styles.line}`}
          role='presentation'
        ></li>
        <li className={`${isLinkActive(currentStep, "2")}`}>
          <Link href='/meets/add?step=2'>
            {isStepPast(currentStep, "2") ? <TickIcon /> : <FilesIcon />}
          </Link>
        </li>
        <li
          className={`${isLinkActive(currentStep, "2")} ${styles.line}`}
          role='presentation'
        ></li>
        <li className={`${isLinkActive(currentStep, "3")}`}>
          <Link href='/meets/add?step=3'>
            <GymIcon />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MeetFormNav;
