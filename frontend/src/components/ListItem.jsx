import Button from "./UI/Button";
import "./ListItem.css";

function ListItem(props) {
  return (
    <li className="list__item">
      <div className="list__itemname">{props.content}</div>
      <div className="list__controls">
        <span className="list__minorcaption">{props.date}</span>
        <Button>delete</Button>
      </div>
    </li>
  );
}

export default ListItem;
