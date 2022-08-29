import { db } from '../config/firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';

const professionalsCollection = collection(db, 'Professionals');

export const getAll = async () => {
  const allProfessionals = await getDocs(professionalsCollection);
  return allProfessionals;
};

export const createProfessional = async newProfessionals => {
  await addDoc(professionalsCollection, newProfessionals);
};
