import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import 'aos/dist/aos.css';
import 'glightbox/dist/css/glightbox.min.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/css/main.css';
import AOS from 'aos';
import GLightbox from 'glightbox';
import Swiper from 'swiper';

AOS.init();
GLightbox();
Swiper();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
