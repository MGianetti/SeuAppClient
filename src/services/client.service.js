import axios from 'axios';
import endPoints from '../config/endpoints';

export const createNew = async newClient => {
  const url = endPoints.client.createNew;
  const { data } = await axios.post(url, JSON.stringify(newClient), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return Promise.resolve(data);
};

export const editById = async editedClient => {
  const url = endPoints.client.editById;
  const { data } = await axios.post(url, JSON.stringify(editedClient), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return Promise.resolve(data);
};

export const getAll = async () => {
  const url = endPoints.client.getAll;
  const { data } = await axios.get(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return Promise.resolve(data);
};

export const removeById = async clientToBeRemovedById => {
  const url = endPoints.client.removeById;
  const { data } = await axios.post(
    url,
    JSON.stringify(clientToBeRemovedById),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return Promise.resolve(data);
};
