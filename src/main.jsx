import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Serviceapp from './Sidepages/serviceapp/Serviceapp.jsx';
import Überuns from "./Sidepages/über-uns/Überuns.jsx";
import {BrowserRouter,Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <div>
      <Route path="/" component={App} exact />
      <Route path="/unsere-angebote" component={Serviceapp} exact />
    </div>
  </BrowserRouter>,
)