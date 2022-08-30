import { db } from '../config/firebase';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';

const servicesCollection = collection(db, 'Services');

export const getAllServices = async () => {
  const allServices = await getDocs(servicesCollection);
  return allServices;
};

export const createService = async newService => {
  await addDoc(servicesCollection, newService);
};

export const deleteService = async serviceDocId => {
  const serviceDoc = doc(db, 'Services', serviceDocId);
  await deleteDoc(serviceDoc);
  return serviceDocId;
};

export const updateService = async ({
  serviceBeingEditedId,
  newServiceProps,
}) => {
  const serviceDoc = doc(db, 'Services', serviceBeingEditedId);
  await updateDoc(serviceDoc, newServiceProps);
  return { serviceBeingEditedId, newServiceProps };
};
