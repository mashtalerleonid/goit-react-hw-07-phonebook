import { v4 as uuidv4 } from "uuid";
import React from "react";
import { Form, Label } from "./ContactForm.styled";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  phonebookOperations,
  phonebookActions,
  phonebookSelectors,
} from "redux/phonebook";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const items = useSelector(phonebookSelectors.getFilteredItems);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isAdded = false;
    const contact = { id: uuidv4(), name, number };
    items.forEach((item) => {
      if (item.name === name) {
        isAdded = true;
        return;
      }
    });

    if (isAdded) {
      alert(`${name} is already in contacts`);
    } else {
      await dispatch(phonebookOperations.addContact(contact));
      await dispatch(phonebookOperations.fetchContacts(contact));
      reset();
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <input
          value={name}
          onChange={handleChange}
          autoComplete="off"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </Label>

      <Label>
        Number
        <input
          value={number}
          onChange={handleChange}
          autoComplete="off"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </Label>

      <button type="submit">Add contact</button>
    </Form>
  );
}
