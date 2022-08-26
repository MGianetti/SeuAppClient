import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';

const professionalsCollection = collection(db, 'Professionals');

export const getAll = async () => {
  const allProfessionals = await getDocs(professionalsCollection);
  return allProfessionals;
};
