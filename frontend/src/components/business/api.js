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

export { deleteItem, addItem, getServerData };
