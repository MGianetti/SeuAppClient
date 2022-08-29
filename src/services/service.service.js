import { db } from '../config/firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';

const servicesCollection = collection(db, 'Services');

export const getAll = async () => {
  const allServices = await getDocs(servicesCollection);
  return allServices;
};

export const createService = async newService => {
  await addDoc(servicesCollection, newService);
};
