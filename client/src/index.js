import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// REACT-ROUTER --> Librería para definir de forma declarativa (Especifico el resultado mas no como llegar a el) las vistas que queremos renderizar dependiendo la URL
import { BrowserRouter } from 'react-router-dom';
//import { Provider } from 'react-redux';
//import store from './Redux/Store/store.js';

// Define el puerto ó 3000 como valor por defecto
const port = process.env.PORT || 3000; 


// ReactDOM.render --> Método de REACT que se utiliza para renderizar un 
//                     componente de REACT en el DOM (Document Object Model)
//                     de una página web

// App --> El compoente que se va a renderizar
// document.getElementById('root') --> Elemento del DOM donde se va a renderizar.
//                                     Podemos ver en el archivo index.html que se 
//                                     encuentra en 'public' que tiene un div de 
//                                     id="root"
// BrowserRouter --> Tipo de router que se está usando
ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>
  ,document.getElementById('root')
);


// Inicia el front en el servidor en el puerto especificado
App.listen(port, () => {
  console.log(`Frontend server running on port ${port}`);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
