import "./Core.css";
import Button from "./UI/Button.jsx";
import List from "./List.jsx";
import Modal from "./Mdl.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
import { deleteItem, addItem, getServerData } from "./business/api.js";

function Core() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const response = await axios.get("/api/getdata");
    setItems(response.data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const handleItemAdded = async () => fetchItems();

  return (
    <main className="core">
      <Button onClick={openModal}>add item</Button>
      <List data={items} />
      <Modal hidden={!modalVisible} onClose={closeModal} onItemAdded={handleItemAdded} />
    </main>
  );
}

export default Core;
