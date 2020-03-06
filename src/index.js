import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import App from './components/app/app.js';

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