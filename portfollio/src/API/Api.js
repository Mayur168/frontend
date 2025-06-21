// import axios from "axios"

// const api = axios.create({
//     baseURL : "https"
// });

// // get the product

// export const fetchProject = async (pageParam = 1) => {
//   try {
//     const res = await api.get(`/projects?page=${pageParam}`);

//     if (res.status === 200 && Array.isArray(res.data.projects)) {
//       return res.data.projects;
//     } else if (Array.isArray(res.data)) {
//       return res.data;
//     } else {
//       return [];
//     }
//   } catch (error) {
//     console.error("Fetch Project Error:", error);
//     return [];
//   }
// };

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://portfolio-self-iota-66.vercel.app/',
});

// Add token to requests if authenticated
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); 
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Login API call
export const login = async ({ phone, password }) => {
  try {
    const res = await api.post('api/login', { phone, password });
    const { success, token } = res.data;
    if (success && token) {
      localStorage.setItem('token', token);
    }
    return res.data; // Expecting { success: true, token: '...' }
  } catch (error) {
    console.error('Login API Error:', error);
    throw error;
  }
};

// Fetch contacts
export const fetchContacts = async () => {
  try {
    const res = await api.get('/contacts');
    if (res.status === 200 && Array.isArray(res.data.contacts)) {
      return res.data.contacts;
    } else if (Array.isArray(res.data)) {
      return res.data;
    } else {
      return [];
    }
  } catch (error) {
    console.error('Fetch Contacts Error:', error);
    throw error;
  }
};

// Fetch projects
export const fetchProject = async (pageParam = 1) => {
  try {
    const res = await api.get(`/projects?page=${pageParam}`);
    if (res.status === 200 && Array.isArray(res.data.projects)) {
      return res.data.projects;
    } else if (Array.isArray(res.data)) {
      return res.data;
    } else {
      return [];
    }
  } catch (error) {
    console.error('Fetch Project Error:', error);
    return [];
  }
};

// Create a new project
export const createProject = async ({ name, project_description, project_link, project_image }) => {
  try {
    const res = await api.post('/projects', { name, project_description, project_link, project_image });
    return res.data; // Expecting { success: true, project: { id, name, project_description, project_link, project_image } }
  } catch (error) {
    console.error('Create Project Error:', error);
    throw error;
  }
};

// Update an existing project
export const updateProject = async ({ id, name, project_description, project_link, project_image }) => {
  try {
    const res = await api.patch(`/projects/${id}`, { name, project_description, project_link, project_image });
    return res.data; // Expecting { success: true, project: { id, name, project_description, project_link, project_image } }
  } catch (error) {
    console.error('Update Project Error:', error);
    throw error;
  }
};

// Delete a project
export const deleteProject = async (id) => {
  try {
    const res = await api.delete(`/projects/${id}`);
    return res.data; // Expecting { success: true }
  } catch (error) {
    console.error('Delete Project Error:', error);
    throw error;
  }
};