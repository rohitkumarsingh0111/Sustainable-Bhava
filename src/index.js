import React from 'react';
import './index.css';
import App from './App';
import ReactDom from 'react-dom'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

ReactDom.render(
  <GoogleOAuthProvider clientId={clientId}>
  <BrowserRouter>
   <App />
  </BrowserRouter>
  </GoogleOAuthProvider>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
