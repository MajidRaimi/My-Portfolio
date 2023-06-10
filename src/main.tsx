import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { ToastContainer } from 'react-toastify';

import './index.css'
import 'animate.css';
import 'react-vertical-timeline-component/style.min.css';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>,
)
