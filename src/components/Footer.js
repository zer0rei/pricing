import React, { Component } from 'react';
import FooterColumn from './FooterColumn';
import bootstrapLogo from '../assets/bootstrap-logo.svg';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkColumns: [
        {
          header: 'Features',
          linksList: [
            {
              name: 'Cool stuff',
              link: '#'
            },
            {
              name: 'Random feature',
              link: '#'
            },
            {
              name: 'Team feature',
              link: '#'
            },
            {
              name: 'Stuff for developers',
              link: '#'
            },
            {
              name: 'Another one',
              link: '#'
            },
            {
              name: 'Last time',
              link: '#'
            }
          ]
        },
        {
          header: 'Resources',
          linksList: [
            {
              name: 'Resource',
              link: '#'
            },
            {
              name: 'Resource name',
              link: '#'
            },
            {
              name: 'Another resource',
              link: '#'
            },
            {
              name: 'Final resource',
              link: '#'
            }
          ]
        },
        {
          header: 'About',
          linksList: [
            {
              name: 'Team',
              link: '#'
            },
            {
              name: 'Locations',
              link: '#'
            },
            {
              name: 'Privacy',
              link: '#'
            },
            {
              name: 'Terms',
              link: '#'
            }
          ]
        }
      ]
    }
  }

  render() {
    const currYear = (new Date()).getFullYear();
    const copyRightYears = `2017-${currYear}`;
    let columns = this.state.linkColumns.map((column) => 
      <FooterColumn content={column} />
    );
    return (
      <footer className={`
        pt-4
        my-md-5
        pt-md-5
        border-top
      `}>
        <div className={`row`}>
          <div className={`
            col-12
            col-md
          `}>
            <img
              className={`mb-2`}
              src={bootstrapLogo}
              alt='bootstrap logo'
              width='24'
              height='24'
            />
            <small className={`
              d-block
              mb-3
              text-muted
            `}>
              &copy; {copyRightYears}
            </small>
          </div>
          {columns}
        </div>
      </footer>
    );
  }
}

export default Footer;
