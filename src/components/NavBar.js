import React, { Component } from 'react';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkNames: [
        'Features',
        'Entreprise',
        'Support',
        'Pricing'
      ]
    }
  }

  render() {
    let links = this.state.linkNames.map((linkName, i) =>
      <a className={`p-2 text-dark`} href={'#'} key={i}>{linkName}</a>
    );
    return (
      <nav className={`
        my-2
        my-md-0
        mr-md-3
      `}>
        {links}
      </nav>
    );
  }
}

export default NavBar;
