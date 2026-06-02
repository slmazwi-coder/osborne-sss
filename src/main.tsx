import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const DATA_VERSION = 'osborn-v1';
if (localStorage.getItem('data_version') !== DATA_VERSION) {
  Object.keys(localStorage)
    .filter(k => k.startsWith('admin_') || k.startsWith('mh_') || k.startsWith('osborn_'))
    .forEach(k => localStorage.removeItem(k));
  localStorage.setItem('data_version', DATA_VERSION);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
