import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from './lib/config';
import App from './App.tsx';
import './index.css';

// Initialize EmailJS
emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);