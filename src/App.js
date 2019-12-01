import React from 'react';
import './App.css';
import Header from './components/Header'
import Background from "./assets/room.jpg"
import Page from "./components/Page";
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <div className="bg-local banner-img" style={{backgroundImage: `url(${Background})`}}>
        <Header/>
        <div className="flex h-full">
          <div className="w-full self-center">
            <p className="title-big font-bold text-center noto">Estilo <br/> Escandinavo </p>
          </div>
        </div>
      </div>
      <Page/>
      <Footer/>
    </div>
  );
}

export default App;
