import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './Header';
import PricingHeader from './PricingHeader';
import CardsContainer from './CardsContainer';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <PricingHeader />
        <div className={`container`}>
          <CardsContainer />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
