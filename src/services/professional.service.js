import axios from 'axios';
import endPoints from '../config/endpoints';

export const createNew = async newProfessional => {
  const url = endPoints.professional.createNew;
  const { data } = await axios.post(url, JSON.stringify(newProfessional), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return Promise.resolve(data);
};

export const editById = async editedProfessional => {
  const url = endPoints.professional.editById;
  const { data } = await axios.post(url, JSON.stringify(editedProfessional), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return Promise.resolve(data);
};

export const getAll = async () => {
  const url = endPoints.professional.getAll;
  const { data } = await axios.get(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return Promise.resolve(data);
};

export const removeById = async professionalToBeRemovedById => {
  const url = endPoints.professional.removeById;
  const { data } = await axios.post(
    url,
    JSON.stringify(professionalToBeRemovedById),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return Promise.resolve(data);
};
