import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from '../src/Pages/homepage/homepage.component';
import ShopPage from '../src/Pages/Shop/shoppage.component';
import Header from './Component/Header/header.component'



function App() {
  return (
    <div className="App">
    <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />>
      </Switch>
    </div>
  );
}

export default App;
