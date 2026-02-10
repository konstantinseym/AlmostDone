import "./Input.css";

function Input(props) {
  return <input value={props.value} onChange={props.onChange} className="input" autoComplete="off" type={props.type} placeholder={props.placeholder} />;
}

export default Input;
