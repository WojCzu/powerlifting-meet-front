import { useEffect, useRef, useState } from "react";
import styles from "@/styles/Input.module.css";
import ShowPasswordIcon from "@/icons/eye-closed.svg";
import HidePasswordIcon from "@/icons/eye-open.svg";

const Input = props => {
  if (props.type === "password") return <InputWithIcon {...props} />;
  if (props.type === "textarea") return <Textarea {...props} />;
  return <InputWithoutIcon {...props} />;
};

export default Input;

Input.defaultProps = {
  type: "text",
};

const InputWithoutIcon = ({ id, label, type, ...props }) => (
  <div className={styles.input}>
    <label htmlFor={id}>{label}</label>
    <input id={id} type={type} {...props} />
  </div>
);
const Textarea = ({ id, label, type, ...props }) => {
  const textareaRef = useRef();

  useEffect(() => {
    handleResize();
  }, []);

  const handleResize = () => {
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
  };

  return (
    <div className={styles.textarea}>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        type={type}
        {...props}
        onInput={handleResize}
        ref={textareaRef}
      />
    </div>
  );
};

const InputWithIcon = ({ id, label, type: defaultType, ...props }) => {
  const [type, setType] = useState(defaultType);

  const toggleType = () => {
    setType(prevType => (prevType === defaultType ? "text" : defaultType));
  };
  return (
    <div className={styles.input}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} className={styles.iconInput} {...props} />

      {defaultType === "password" && (
        <button type='button' onClick={toggleType} className={styles.icon}>
          {type === "password" ? <ShowPasswordIcon /> : <HidePasswordIcon />}
        </button>
      )}
    </div>
  );
};
