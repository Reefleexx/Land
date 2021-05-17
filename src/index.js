import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./redux/store";
import Layout from "./hoc/Layout";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
          <Layout>
              <React.StrictMode>
                  <App />
              </React.StrictMode>
          </Layout>
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to 12log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
