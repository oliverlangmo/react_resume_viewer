import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Resume from './Components/Resume';
import Testimonials from './Components/Testimonials';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
