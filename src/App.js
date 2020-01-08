import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import MainRoute from './routes/MainRoute';
import { Provider } from "unistore/react";
import { store } from "./store";

function App() {
  return (
    <div>
      <Provider store={store}>
      <MainRoute />
      </Provider>
    </div>
  );
}

export default App;
