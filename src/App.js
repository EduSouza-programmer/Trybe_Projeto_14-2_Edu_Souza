import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from './styles/global';
import * as pg from './pages';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={pg.Home} />
        <Route path="/shopcart" component={pg.ShopCart} />
        <Route path="/product/:id" component={pg.ProductsDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
