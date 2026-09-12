import React from 'react';
import ReactDOM from 'react-dom/client';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import App from './App';
import './index.css';

gsap.registerPlugin(ScrollTrigger);

const PLAY_STORE = 'https://play.google.com/store/apps/details?id=com.vaidyasarthi.app';

// Intercept redirect routes to Google Play Store
const redirectRoutes = [
  '/download',
  '/download/',
  '/playstore',
  '/playstore/',
  '/play',
  '/play/',
  '/app',
  '/app/',
  '/store',
  '/store/',
  '/install',
  '/install/',
  '/get',
  '/get/',
];

const currentPath = window.location.pathname.toLowerCase();

if (
  redirectRoutes.includes(currentPath) ||
  window.location.search.includes('redirect=playstore') ||
  window.location.search.includes('download')
) {
  window.location.replace(PLAY_STORE);
} else {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
