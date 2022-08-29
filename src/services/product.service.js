import { db } from '../config/firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';

const servicesCollection = collection(db, 'Products');

export const getAll = async () => {
  const allServices = await getDocs(servicesCollection);
  return allServices;
};

export const createProduct = async newProduct => {
  await addDoc(servicesCollection, newProduct);
};
