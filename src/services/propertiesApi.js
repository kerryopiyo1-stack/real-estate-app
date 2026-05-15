const API_URL = 'https://real-estate-app-5-bg0z.onrender.com';

export const propertiesApi = {
  getAll: () => fetch(API_URL).then(res => res.json()),

  getOne: (id) => fetch(`${API_URL}/${id}`).then(res => res.json()),

  create: (data) => fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(res => res.json()),

  update: (id, data) => fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(res => res.json()),

  delete: (id) => fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  }).then(res => res.json())
};