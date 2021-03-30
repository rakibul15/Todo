import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import reportWebVitals from './reportWebVitals';
import 'font-awesome/css/font-awesome.min.css'
import { Provider } from 'react-redux'
import { createStore } from 'redux';



const initilizeState={
  counter:10,
};

function CounterReducer(state=initilizeState,action){
  switch(action.type){
    case'GET_COUNTER':
    return{
      ...state,
    };
    case'INC':
    return{
      ...state,
      counter: state.counter + 1,
    };
    break;
    case'DEC':
    return{
      ...state,
      counter: state.counter - 1,
    };
    break;
    case'UPDATE':
    return{
      ...state,
      counter:action.payload,
    };
    break;
    default:
       break;
  }

  return state;
};

let store=createStore(CounterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
