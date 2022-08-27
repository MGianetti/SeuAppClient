import { db } from '../config/firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';

const clientsCollection = collection(db, 'Clients');

export const getAll = async () => {
  const allClients = await getDocs(clientsCollection);
  return allClients;
};

export const createUser = async newUser => {
  await addDoc(clientsCollection, newUser);
};
