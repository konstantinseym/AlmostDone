document.addEventListener("DOMContentLoaded", async () => {
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
  function deleteItem() {
    //
  }
  function addItem() {
    //
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
      const copy = template.content.cloneNode(true);
      copy.querySelector("[data-item-content]").textContent = item.content;
      copy.querySelector("[data-item-date]").textContent = item.date;
      container.appendChild(copy);
    });
  }

  generateItems();

  btnOpenModal.addEventListener("click", () => {
    openModal();
  });
  btnCloseModal.addEventListener("click", () => {
    closeModal();
  });
  appForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addItem();
  });
});
