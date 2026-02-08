import "./Button.css";

function Button({ children }, ...props) {
  return <button className="button">{children}</button>;
}

export default Button;
