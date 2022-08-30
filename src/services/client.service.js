import { db } from '../config/firebase';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';

const clientsCollection = collection(db, 'Clients');

export const getAllClients = async () => {
  const allClients = await getDocs(clientsCollection);
  return allClients;
};

export const createClient = async newUser => {
  await addDoc(clientsCollection, newUser);
};

export const deleteClient = async clientDocId => {
  const clientDoc = doc(db, 'Clients', clientDocId);
  await deleteDoc(clientDoc);
  return clientDocId;
};

export const updateClient = async ({ clientBeingEditedId, newClientProps }) => {
  const clientDoc = doc(db, 'Clients', clientBeingEditedId);
  await updateDoc(clientDoc, newClientProps);
  return { clientBeingEditedId, newClientProps };
};
