import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

export async function fetchContacts() {
  const { data } = await axios.get("/contacts");
  return data;
}

export async function delContact(id) {
  await axios.delete(`/contacts/${id}`);
}

export async function addContact(contact) {
  await axios.post("/contacts", contact);
}
