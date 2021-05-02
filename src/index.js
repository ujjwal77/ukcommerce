import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {BrowserRouter} from 'react-router-dom';
import { StateProvider } from './Components/StateProvider'
import reducer, { initialState } from "./Reducer";

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    {/* Passing App as children */}
    <App />
  </StateProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
