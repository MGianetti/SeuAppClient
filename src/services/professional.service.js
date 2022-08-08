import axios from 'axios';
import endPoints from '../config/endpoints';

export const createNew = async newItem => {
  const url = endPoints.client.createNew;
  const { data } = await axios.post(
    'http://localhost:3001/api/product/new',
    JSON.stringify(newItem),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return Promise.resolve(data);
};

export const editById = async newItem => {
  const url = endPoints;
  const { data } = await axios.post(
    'http://localhost:3001/api/product/new',
    JSON.stringify(newItem),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return Promise.resolve(data);
};

export const getAll = async newItem => {
  const url = endPoints;
  const { data } = await axios.post(
    'http://localhost:3001/api/product/new',
    JSON.stringify(newItem),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return Promise.resolve(data);
};

export const removeById = async newItem => {
  const url = endPoints;
  const { data } = await axios.post(
    'http://localhost:3001/api/product/new',
    JSON.stringify(newItem),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return Promise.resolve(data);
};
