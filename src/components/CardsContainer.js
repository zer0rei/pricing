import React, { Component } from 'react';
import './CardsContainer.css';
import Card from './Card';

class CardsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardsContent: [
        {
          price: 0,
          header: 'Free',
          infosList: [
            '10 users included',
            '2 GB of storage',
            'Email support',
            'Help center access'
          ],
          buttonMessage: 'Sign up for free',
          isButtonOutline: true
        },
        {
          price: 15,
          header: 'Pro',
          infosList: [
            '20 users included',
            '10 GB of storage',
            'Priority email support',
            'Help center access'
          ],
          buttonMessage: 'Get started',
          isButtonOutline: false
        },
        {
          price: 29,
          header: 'Enterprise',
          infosList: [
            '30 users included',
            '15 GB of storage',
            'Phone and email support',
            'Help center access'
          ],
          buttonMessage: 'Contact us',
          isButtonOutline: false
        }
      ]
    }
  }

  render() {
    let cards = this.state.cardsContent.map((cardContent) => 
      <Card content={cardContent} />
    );
    return (
      <div className={`
        card-deck
        mb-3
        text-center
      `}>
        {cards}
      </div>
    );
  }
}

export default CardsContainer;
