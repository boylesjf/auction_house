import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FacebookLogin from 'react-facebook-login'

const responseFacebook = (response: any) => {
  console.log(response);
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    <FacebookLogin
      appId="313832323846087"
      autoLoad={true}
      fields="name,email,picture"
      callback={responseFacebook} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
