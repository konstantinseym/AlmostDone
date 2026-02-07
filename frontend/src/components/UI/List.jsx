import React from "react";
import Button from "./Button";
import "./List.css";

function List() {
  return (
    <ul className="list">
      <li className="list__item">
        <div className="list__itemname">
            first item
        </div>
        <div className="list__controls">
            <span className="list__minorcaption">
                13.01.2025 13:45
            </span>
            <Button>delete</Button>
        </div>
      </li>
    </ul>
  );
}

export default List;
