import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import rootReducer from './reducers/reducer';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
  
// import { loadEmployees } from './actions/action-creators';
// import { GET_EMPLOYEES } from './actions/action-types';

const store = createStore(rootReducer,composeWithDevTools(

    applyMiddleware(thunk))

);

// console.log(store.getState());
// let sampledata=[
//   { LocationID:'CHE',Name:'Saket',Age:30,Department:'Finance',Designation:'Auditee',Location:'Chennai',EmpCode:'E0012'},
//   { LocationID:'HYD',Name:'Ram',Age:35,Department:'Aero',Designation:'Sr. Engineer',Location:'Hyderabad',EmpCode:'E0027'}
// ]

// store.dispatch(loadEmployees(sampledata));
// console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
