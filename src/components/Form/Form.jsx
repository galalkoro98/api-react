import { InputField } from "./InputField";
import { Button } from "./Button";
import "./styles/Form.css";

export const Form = () => {
  return (
    <form className="form__content">
      <InputField />
      <Button />
    </form>
  );
};
