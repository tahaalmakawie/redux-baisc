import React from 'react'
import './App.css';
import { Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import Counter from './component/Counter';

function App() {
  return(
  <Fragment>
    <Provider store={store}>
        <Counter  />
    </Provider>
  </Fragment>
  )
  }

export default App;
