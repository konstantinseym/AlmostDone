import "./Core.css";
import Button from "./UI/Button.jsx";
import List from "./List.jsx";
import { deleteItem, addItem, getServerData } from "./business/api.js";

function Core() {
  // still i dont use fetch
  const serverData = [
    { id: "1", content: "first", date: "13.01.2025, 13:35" },
    { id: "2", content: "second", date: "15.01.2025, 00:15" },
    { id: "3", content: "third", date: "17.01.2025, 00:21" },
  ];

  return (
    <main className="core">
      <Button>add item</Button>
      <List data={serverData} />
    </main>
  );
}

export default Core;
