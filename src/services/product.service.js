import { db } from '../config/firebase';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';

const productsCollection = collection(db, 'Products');

export const getAllProducts = async () => {
  const allProducts = await getDocs(productsCollection);
  return allProducts;
};

export const createProduct = async newProduct => {
  await addDoc(productsCollection, newProduct);
};

export const deleteProduct = async productDocId => {
  const productDoc = doc(db, 'Products', productDocId);
  await deleteDoc(productDoc);
  return productDocId;
};

export const updateProduct = async ({
  productBeingEditedId,
  newProductProps,
}) => {
  const productDoc = doc(db, 'Products', productBeingEditedId);
  await updateDoc(productDoc, newProductProps);
  return { productBeingEditedId, newProductProps };
};
