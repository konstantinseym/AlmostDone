document.addEventListener("DOMContentLoaded", async () => {
  generateItems();
  const btnOpenModal = document.querySelector("#btnOpenModal"),
    appForm = document.querySelector("#appForm"),
    btnCloseModal = document.querySelector("#btnCloseModal"),
    modalAddItem = document.querySelector("#modalAddItem");

  function openModal() {
    modalAddItem.classList.add("app__modal--shown");
  }
  function closeModal() {
    modalAddItem.classList.remove("app__modal--shown");
  }
  async function deleteItem(deletingId) {
    const res = await fetch("/api/deleteitem/" + deletingId, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      credentials: "include",
    });
  }
  async function addItem(content) {
    const sendingData = { data: content };
    const res = await fetch("/api/additem", {
      method: "POST",
      headers: { "content-type": "application/json" },
      credentials: "include",
      body: JSON.stringify(sendingData),
    });
  }
  async function getServerData() {
    const response = await fetch("/api/getdata");
    const data = await response.json();
    return data;
  }
  async function generateItems() {
    const serverData = await getServerData();
    const template = document.querySelector("#itemTemplate");
    const container = document.querySelector("#itemContainer");
    serverData.forEach((item) => {
      const currentId = item.id;
      const copy = template.content.cloneNode(true);
      const li = copy.querySelector(".app__item");
      li.dataset.id = currentId;
      copy.querySelector("[data-item-content]").textContent = item.content;
      copy.querySelector("[data-item-date]").textContent = item.date;
      const deleteBtn = copy.querySelector(".deleteBtn");
      deleteBtn.addEventListener("click", async () => {
        deleteBtn.disabled = true;
        await deleteItem(currentId);
        deleteBtn.disabled = false;
      });
      container.appendChild(copy);
    });
  }

  btnOpenModal.addEventListener("click", () => {
    openModal();
  });
  btnCloseModal.addEventListener("click", () => {
    closeModal();
  });
  appForm.addEventListener("submit", (e) => {
    e.preventDefault();
    appForm.newItemContent.disabled = true;
    const newItemContent = appForm.newItemContent.value;
    addItem(newItemContent);
    appForm.newItemContent.disabled = false;
    closeModal();
    alert("Item added!");
  });
});
