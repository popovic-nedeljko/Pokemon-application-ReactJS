import React from 'react';
import './sass/main.scss';
import ReactDOM from 'react-dom/client';
import { AppProvider } from './context';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import Footer from './components/footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
        <Footer />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
