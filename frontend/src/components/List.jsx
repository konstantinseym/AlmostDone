import { useState } from "react";
import "./List.css";
import ListItem from "./ListItem.jsx";

function List(props) {
  const itemsData = props.data;

  return (
    <ul className="list">
      {itemsData.map(item =>
        <ListItem content={item.content} date={item.date} key={item.id}/>
      )}
    </ul>
  );
}

export default List;
