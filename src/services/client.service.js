import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';

const clientsCollection = collection(db, 'Clients');

export const getAll = async () => {
  const allClients = await getDocs(clientsCollection);
  return allClients;
};
