import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';

const servicesCollection = collection(db, 'Services');

export const getAll = async () => {
  const allServices = await getDocs(servicesCollection);
  return allServices;
};
