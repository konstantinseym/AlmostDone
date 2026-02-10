import { useState } from "react";
import axios from "axios";
import "./Mdl.css";
import Button from "./UI/Button.jsx";
import Input from "./UI/Input.jsx";

function Mdl({ hidden, onClose, onItemAdded }) {
  const [inputValue, setInputValue] = useState("");

  function handleChangeInputValue(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  async function addItem() {
    await axios.post(
      "/api/additem",
      { data: inputValue },
      { withCredentials: true },
    );
    setInputValue("");
    onClose();
    onItemAdded();
  }

  return (
    <div className={"mdl" + (hidden ? " mdl--hidden" : "")}>
      <div className="mdl__container">
        <h2 className="mdl__caption">add item</h2>
        <form onSubmit={handleSubmit} className="mdl__form">
          <Input
            type="text"
            placeholder="type here"
            value={inputValue}
            onChange={handleChangeInputValue}
          />
          <Button onClick={addItem}>add</Button>
          <Button onClick={onClose}>back</Button>
        </form>
      </div>
    </div>
  );
}

export default Mdl;
