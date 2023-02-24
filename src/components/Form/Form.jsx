import { InputField } from "./InputField";
import { Button } from "./Button";
import "./styles/Form.css";

export const Form = (props) => {
  return (
    <form className="form__content" onSubmit={props.handleSubmit}>
      <InputField handleChange={props.handleChange} />
      <Button />
    </form>
  );
};
