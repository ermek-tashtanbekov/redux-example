import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import counterReducers from './redux/counterReducers'
import colorReduser from './redux/colorReduser'
import TextDisplay from './redux/textRedusers'



const rootReduse = combineReducers({
  counter: counterReducers,
  color: colorReduser,
  textt : TextDisplay
})
const store = createStore(rootReduse)
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
