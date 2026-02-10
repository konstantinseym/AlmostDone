import axios from "axios";
import Button from "./UI/Button.jsx";
import "./ListItem.css";

function ListItem(props) {
   function handleDeleteBtn() {
    const deletingId = props.id;
    const res = axios.delete("/api/deleteitem/" + deletingId, {
      withCredentials: true,
      headers: { "Content-Type": "application/json" },
    });
  }

  return (
    <li className="list__item">
      <div className="list__itemname">{props.content}</div>
      <div className="list__controls">
        <span className="list__minorcaption">{props.date}</span>
        <Button onClick={handleDeleteBtn}>delete</Button>
      </div>
    </li>
  );
}

export default ListItem;