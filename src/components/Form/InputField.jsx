import "./styles/Input.css";

export const InputField = (props) => {
  return (
    <input
      type="text"
      className="input"
      placeholder="search pokemon by ID od Name"
      onChange={props.handleChange}
      value={props.input}
    />
  );
};
