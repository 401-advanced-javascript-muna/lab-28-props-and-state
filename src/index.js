import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.js';
import Footer from './components/footer.js';

import App from './app.js';
function Main(){
  return(
    <>
      <Header />
      <App />
      <Footer />
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);