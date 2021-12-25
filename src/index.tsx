import React from 'react';
import ReactDOM from 'react-dom';
import { 
  createStore, 
  applyMiddleware, 
  Store, 
  Dispatch, 
  AnyAction
} from "redux"
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from './App';
import reducer from "./redux/reducer";
import {
  IState,
} from './commonTypes';
import reportWebVitals from './reportWebVitals';
import './index.css';

const store: Store<IState, AnyAction> & {
  dispatch: Dispatch
} = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
