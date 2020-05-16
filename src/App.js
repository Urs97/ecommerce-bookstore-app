import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout/AppLayout';
import Home from './components/Home/Home';
import Slider from './components/Slider/Slider';

function App() {
  return (
    <>
      <AppLayout>
        <Switch>
          <Route path="/" component={Slider}/>
        </Switch>
      </AppLayout>
    </>
  );
};

export default App;
