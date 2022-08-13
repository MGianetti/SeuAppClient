import axios from 'axios';
import endPoints from '../config/endpoints';

export const createNew = async newService => {
  const url = endPoints.service.createNew;
  const { data } = await axios.post(url, JSON.stringify(newService), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return Promise.resolve(data);
};

export const editById = async editedService => {
  const url = endPoints.service.editById;
  const { data } = await axios.post(url, JSON.stringify(editedService), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return Promise.resolve(data);
};

export const getAll = async () => {
  const url = endPoints.service.getAll;
  const { data } = await axios.get(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return Promise.resolve(data);
};

export const removeById = async serviceToBeRemovedById => {
  const url = endPoints.service.removeById;
  const { data } = await axios.post(
    url,
    JSON.stringify(serviceToBeRemovedById),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return Promise.resolve(data);
};
