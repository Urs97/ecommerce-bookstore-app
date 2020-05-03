import React from 'react';
import './App.scss';
import Home from './components/Home/Home';
import { Switch, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout/AppLayout';

function App() {
  return (
    <>
      <AppLayout>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </AppLayout>
    </>
  );
};

export default App;
