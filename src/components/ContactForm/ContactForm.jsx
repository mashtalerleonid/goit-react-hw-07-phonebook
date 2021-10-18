import React from "react";
import { Form, Label } from "./ContactForm.styled";
import { useState } from "react";
import { useSelector } from "react-redux";

import { useAddContactMutation } from "service/phonebook-api";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [addContact] = useAddContactMutation();

  const items = useSelector((state) =>
    state.phonebook.queries["getAllContacts(undefined)"]
      ? state.phonebook.queries["getAllContacts(undefined)"].data
      : []
  );

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

  const handleSubmit = (e) => {
    e.preventDefault();
    let isAdded = false;
    const contact = { name, number };

    if (items) {
      items.forEach((item) => {
        if (item.name === name) {
          isAdded = true;
          return;
        }
      });
    }

    if (isAdded) {
      alert(`${name} is already in contacts`);
    } else {
      // await dispatch(phonebookOperations.addContact(contact));
      // await dispatch(phonebookOperations.fetchContacts(contact));
      addContact(contact);
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

// import {
//   phonebookOperations,
//   phonebookActions,
//   phonebookSelectors,
// } from "redux/phonebook";
