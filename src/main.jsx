import React from 'react'
import ReactDOM from 'react-dom/client'
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Work from './components/Portfolio/Work';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
// import './styles/tailwind.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <Header />

    <main className='main'>
      <Home />
      <Work />
      <About />
      <Contact />
    </main>

    <Footer />
    <ScrollUp />
    </>

  </React.StrictMode>
)
 