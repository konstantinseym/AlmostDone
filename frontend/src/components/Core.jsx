import React from "react";
import "./Core.css";
import Button from "./UI/Button.jsx";
import List from "./UI/List.jsx";
import { deleteItem, addItem, getServerData } from "./business/api.js";

function Core() {
  return (
    <main className="core">
      <Button>add item</Button>
      <List />
    </main>
  );
}

export default Core;
