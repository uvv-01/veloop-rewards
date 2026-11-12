import axios from 'axios';

// In production on deployed hosts with edge rewrites (e.g. Vercel, Netlify), use empty baseURL ('')
// so requests hit the same-origin reverse proxy (/api/...) and avoid cross-origin CORS blocks.
// In local development, GitHub Pages, or when explicitly specified via VITE_API_BASE_URL, use target URL.
const isGitHubPages = typeof window !== 'undefined' && window.location.hostname.includes('github.io');
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL !== undefined
    ? import.meta.env.VITE_API_BASE_URL
    : isGitHubPages
    ? 'https://veloop-backend.onrender.com'
    : import.meta.env.PROD
    ? ''
    : 'https://veloop-backend.onrender.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to attach Bearer token (supports both 'token' and 'veloop_token')
api.interceptors.request.use(
  (config) => {
    const token =
      localStorage.getItem('token') ||
      localStorage.getItem('veloop_token');
    if (token && token !== 'undefined' && token !== 'null') {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default api;
