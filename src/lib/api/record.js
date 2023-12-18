// record.js

import client from './client';

// get
export const getList = () => {
  return client.get('/records');
};

// detail
export const getDetail = (id) => {
  return client.get(`/records/${id}`);
};

// create
export const createRecord = (params) => {
  return client.post('/records', params);
};

// update
export const updateRecord = (id, params) => {
  return client.put(`/records/${id}`, params);
};

// delete
export const deleteRecord = (id) => {
  return client.delete(`/records/${id}`);
};