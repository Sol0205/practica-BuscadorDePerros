import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import Layout from './components/Layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Layout />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
