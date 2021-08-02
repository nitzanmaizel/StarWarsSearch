import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { MoviesContextProvider } from './components/store/MoviesContextProvider';

ReactDOM.render(
  <BrowserRouter>
    <MoviesContextProvider>
      <App />
    </MoviesContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();
