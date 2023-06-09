import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductList from './ShoesShop/ProductList';
import Modal from './ShoesShop/Modal';
import ShoesStore from './ShoesShop/ShoesStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <div  style={{
    backgroundImage:"url(/img/background.jpg)",
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    
    
}}>
    <ShoesStore/>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
