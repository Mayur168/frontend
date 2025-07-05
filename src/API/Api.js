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

// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'https://portfolio-self-iota-66.vercel.app/api/',
// });

// // Add token to requests if authenticated
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token'); 
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// // Login API call
// export const login = async ({ phone, password }) => {
//   try {
//     const res = await api.post('login', { phone, password });
//     const { success, token } = res.data;
//     if (success && token) {
//       localStorage.setItem('token', token);
//     }
//     return res.data; // Expecting { success: true, token: '...' }
//   } catch (error) {
//     console.error('Login API Error:', error);
//     throw error;
//   }
// };

// // Fetch contacts
// export const fetchContacts = async () => {
//   try {
//     const res = await api.get('/contacts');
//     if (res.status === 200 && Array.isArray(res.data.contacts)) {
//       return res.data.contacts;
//     } else if (Array.isArray(res.data)) {
//       return res.data;
//     } else {
//       return [];
//     }
//   } catch (error) {
//     console.error('Fetch Contacts Error:', error);
//     throw error;
//   }
// };

// // Fetch projects
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
//     console.error('Fetch Project Error:', error);
//     return [];
//   }
// };

// // Create a new project
// export const createProject = async ({ name, project_description, project_link, project_image }) => {
//   try {
//     const res = await api.post('/projects', { name, project_description, project_link, project_image });
//     return res.data; // Expecting { success: true, project: { id, name, project_description, project_link, project_image } }
//   } catch (error) {
//     console.error('Create Project Error:', error);
//     throw error;
//   }
// };

// // Update an existing project
// export const updateProject = async ({ id, name, project_description, project_link, project_image }) => {
//   try {
//     const res = await api.patch(`/projects/${id}`, { name, project_description, project_link, project_image });
//     return res.data; // Expecting { success: true, project: { id, name, project_description, project_link, project_image } }
//   } catch (error) {
//     console.error('Update Project Error:', error);
//     throw error;
//   }
// };

// // Delete a project
// export const deleteProject = async (id) => {
//   try {
//     const res = await api.delete(`/projects/${id}`);
//     return res.data; // Expecting { success: true }
//   } catch (error) {
//     console.error('Delete Project Error:', error);
//     throw error;
//   }
// };


import axios from 'axios';

const api = axios.create({
  baseURL: 'https://portfolio-self-iota-66.vercel.app/',
});


// Request interceptor for token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = async ({ email, password }) => {
  try {
    const res = await api.post('api/login/', { email, password });
    console.log('API Login Response:', res.data); // Debug API response
    const { access_token, refresh_token } = res.data;
    if (access_token) {
      localStorage.setItem('token', access_token); // Store access_token
      localStorage.setItem('refresh_token', refresh_token); // Optionally store refresh_token
      return { success: true, token: access_token }; // Normalize response for mutation
    } else {
      return { success: false }; // Handle unexpected response
    }
  } catch (error) {
    console.error('Login API Error:', error.response?.data || error.message);
    throw error;
  }
};


export const fetchContacts = async () => {
  try {
    const res = await api.get('api/contacts/');
    console.log('Fetch Contacts Response:', res.data);
    const contacts = res.data.data || []; // Extract 'data' field, fallback to empty array
    console.log('Fetch Contacts Parsed:', contacts);
    return contacts;
  } catch (error) {
    console.error('Fetch Contacts API Error:', {
      status: error.response?.status,
      data: error.response?.data,
      message: error.message,
    });
    throw error;
  }
};

export const deleteContact = async (id) => {
  try {
    const res = await api.delete(`api/contacts/${id}/`);
    console.log('Delete Contact Response:', res.data);
    return res.data;
  } catch (error) {
    console.error('Delete Contact API Error:', {
      status: error.response?.status,
      data: error.response?.data,
      message: error.message,
    });
    throw error;
  }
};

export const createContact = async ({ name, email, suggestion, rating }) => {
  try {
    const res = await api.post('api/contacts/', { name, email, suggestion, rating });
    if (res.status === 201 || res.status === 200) {
      return res.data;
    } else {
      console.warn('Unexpected response status for create contact:', res.status);
      return null;
    }
  } catch (error) {
    console.error('Create Contact Error:', error.response?.data || error.message);
    throw error;
  }
};

export const updateContact = async (id, { name, email, suggestion, rating }) => {
  try {
    const res = await api.patch(`api/contacts/${id}`, { name, email, suggestion, rating });
    if (res.status === 200) {
      return res.data;
    } else {
      console.warn('Unexpected response status for update contact:', res.status);
      return null;
    }
  } catch (error) {
    console.error('Update Contact Error:', error.response?.data || error.message);
    throw error;
  }
};

export const fetchProject = async (pageParam = 1) => {
  try {
    const res = await api.get(`api/project?page=${pageParam}`);
    if (res.status === 200 && Array.isArray(res.data.results)) {
      return res.data.results; // Use `results` to match the API response structure
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

export const fetchProjectById = async (id) => {
  try {
    const res = await api.get(`api/project/${id}`);
    console.log('fetchProjectById Response:', res.data); // Debug log
    return res.data.project || res.data || {}; // Handle both { project: {...} } and { id, name, ... }
  } catch (error) {
    console.error('Fetch Project By ID Error:', error.response?.data || error.message);
    throw error;
  }
};
export const createProject = async ({ name, project_description, project_link, project_image }) => {
  try {
    const res = await api.post('api/project/', { name, project_description, project_link, project_image });
    return res.data; // Expecting { success: true, project: { id, name, project_description, project_link, project_image } }
  } catch (error) {
    console.error('Create Project Error:', error);
    throw error;
  }
};

export const updateProject = async ({ id, name, project_description, project_link, project_image }) => {
  try {
    const res = await api.patch(`api/project/${id}`, {
      name,
      project_description,
      project_link: project_link || null,
      project_image: project_image === 'null' ? null : project_image || null,
    });
    return res.data;
  } catch (error) {
    console.error('Update Project Error:', error.response?.data || error.message);
    throw error;
  }
};

export const deleteProject = async (id) => {
  try {
    const res = await api.delete(`api/project/${id}`);
    return res.data;
  } catch (error) {
    console.error('Delete Project Error:', error.response?.data || error.message);
    throw error;
  }
};