import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createGlobalStyle } from 'styled-components';
import sss from './assets/sss.ttf';
import ita from './assets/ita.ttf';
import matrixbook from './assets/matrixbook.ttf';
import matrixsmall from './assets/matrixsmall.ttf';
import matrixsmall2 from './assets/matrixsmall2.ttf';




// const GlobalStyles = createGlobalStyle`
//   @font-face {
//     font-family: 'ita';
//     src: url(${ita}) format('truetype');
//     font-weight: normal;
//     font-style: normal;
//   }
//   @font-face {
//     font-family: 'sss';
//     src: url(${sss}) format('truetype');
//     font-weight: normal;
//     font-style: normal;
//   }
//   @font-face {
//     font-family: 'mb';
//     src: url(${matrixbook}) format('truetype');
//     font-weight: normal;
//     font-style: normal;
//   }
//   @font-face {
//     font-family: 'ms';
//     src: url(${matrixsmall}) format('truetype');
//     font-weight: normal;
//     font-style: normal;
//   }
//   @font-face {
//     font-family: 'ms2';
//     src: url(${matrixsmall2}) format('truetype');
//     font-weight: normal;
//     font-style: normal;
//   }
// `;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
