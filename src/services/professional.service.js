import { db } from '../config/firebase';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';

const professionalsCollection = collection(db, 'Professionals');

export const getAllProfessionals = async () => {
  const allProfessionals = await getDocs(professionalsCollection);
  return allProfessionals;
};

export const createProfessional = async newProfessional => {
  await addDoc(professionalsCollection, newProfessional);
};

export const deleteProfessional = async professionalDocId => {
  const professionalDoc = doc(db, 'Professionals', professionalDocId);
  await deleteDoc(professionalDoc);
  return professionalDocId;
};

export const updateProfessional = async ({
  professionalBeingEditedId,
  newProfessionalProps,
}) => {
  const professionalDoc = doc(db, 'Professionals', professionalBeingEditedId);
  await updateDoc(professionalDoc, newProfessionalProps);
  return { professionalBeingEditedId, newProfessionalProps };
};
