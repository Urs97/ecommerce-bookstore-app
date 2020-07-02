import React from 'react';
import './App.scss';
import GlobalState from './context/GlobalState';
import { Switch, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout/AppLayout';
import Home from './components/Home/Home';
import Store from './components/Store/Store';
import Cart from './components/Cart/Cart';
import AboutUs from './components/AboutUs/AboutUs';

const App = () => {
  return (
    <GlobalState>
      <AppLayout>
        <Switch>
          <Route path="/store" component={Store} exact/>
          <Route path="/cart" component={Cart} exact/>
          <Route path="/about" component={AboutUs} exact/>
          <Route path="/" component={Home} exact/>
        </Switch>
      </AppLayout>
    </GlobalState>
  );
};

export default App;
