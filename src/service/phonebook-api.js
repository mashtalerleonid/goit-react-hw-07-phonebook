import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const phonebookApi = createApi({
  reducerPath: "phonebook",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),

  tagTypes: ["Contacts"],

  endpoints: (builder) => ({
    addContact: builder.mutation({
      query: (newContact) => ({
        url: "/contacts",
        method: "POST",
        body: newContact,
      }),
      invalidatesTags: ["Contacts"],
    }),

    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contacts"],
    }),

    getAllContacts: builder.query({
      query: () => "/contacts",
      providesTags: ["Contacts"],
    }),
  }),
});

export const {
  useAddContactMutation,
  useDeleteContactMutation,
  useGetAllContactsQuery,
} = phonebookApi;

// axios.defaults.baseURL = "http://localhost:3001";

// export async function fetchContacts() {
//   const { data } = await axios.get("/contacts");
//   return data;
// }

// export async function delContact(id) {
//   await axios.delete(`/contacts/${id}`);
// }

// export async function addContact(contact) {
//   await axios.post("/contacts", contact);
// }
