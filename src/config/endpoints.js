const host = 'localhost:3001';

export default Object.freeze({
  client: {
    createNew: `${host}/client/new`,
    editById: `${host}/client/edit/{CLIENT-ID}`,
    getAll: `${host}/client/all`,
    removeById: `${host}/client/delete/{CLIENT-ID}`,
  },
  product: {
    createNew: `${host}/product/new`,
    editById: `${host}/product/edit/{PRODUCT-ID}`,
    getAll: `${host}/product/all`,
    removeById: `${host}/product/delete/{PRODUCT-ID}`,
  },
  professional: {
    createNew: `${host}/professional/new`,
    editById: `${host}/professional/edit/{PROFESSIONAL-ID}`,
    getAll: `${host}/professional/all`,
    removeById: `${host}/professional/delete/{PROFESSIONAL-ID}`,
  },

  service: {
    createNew: `${host}/service/new`,
    editById: `${host}/service/edit/{SERVICE-ID}`,
    getAll: `${host}/service/all`,
    removeById: `${host}/service/delete/{SERVICE-ID}`,
  },
});
