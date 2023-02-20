import Btn from "react-bootstrap/Button";
import "./styles/Button.css";

export const Button = () => {
  return (
    <Btn variant="primary" type="submit" className="button">
      Submit
    </Btn>
  );
};
