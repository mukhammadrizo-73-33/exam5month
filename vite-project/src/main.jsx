import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import './styles/index.scss';
import { Provider } from "react-redux";
import { store } from "./store";
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode >
      <Provider store={store}>
        <App />
      </Provider>

    </React.StrictMode></BrowserRouter>

)