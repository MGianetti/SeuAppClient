import axios from 'axios';
import endPoints from '../config/endpoints';

export const createNew = async newProduct => {
  const url = endPoints.product.createNew;
  const { data } = await axios.post(url, JSON.stringify(newProduct), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return Promise.resolve(data);
};

export const editById = async editedProduct => {
  const url = endPoints.product.editById;
  const { data } = await axios.post(url, JSON.stringify(editedProduct), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return Promise.resolve(data);
};

export const getAll = async () => {
  const url = endPoints.product.getAll;
  const { data } = await axios.get(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return Promise.resolve(data);
};

export const removeById = async productToBeRemovedById => {
  const url = endPoints.product.removeById;
  const { data } = await axios.post(
    url,
    JSON.stringify(productToBeRemovedById),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return Promise.resolve(data);
};
