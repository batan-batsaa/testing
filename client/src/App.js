import React from 'react';
import AppNavBar from './component/AppNavBar';
import ShoppingList from './component/ShoppingList';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store = { store }>
      <div className="App">
        <AppNavBar />
        <ShoppingList />
      </div>
    </Provider>
  );
}

export default App;
