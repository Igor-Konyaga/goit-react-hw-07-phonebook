import axios from 'axios';

export const fetchAllContacts = async () => {
  const dataContacts = await axios.get(
    'https://6546b49afe036a2fa955f579.mockapi.io/contacts'
  );

  return dataContacts;
};


export const fetchAddContact = async contact => {
  const addContact = await axios.post(
    `https://6546b49afe036a2fa955f579.mockapi.io/contacts`,
    contact
  );

  return addContact;
};

export const fetchDeleteContact = async contactId => {
  const deleteContact = await axios.delete(
    `https://6546b49afe036a2fa955f579.mockapi.io/contacts/${contactId}`
  );

  return deleteContact;
};
