
import './App.css';
import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Products} from './Components/Pages/Products/Products.jsx';
import {Home} from './Components/Pages/Home/Home.jsx';

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/">
        <Home/>
        </Route>
        <Route exact path="/products">
        <Products/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
