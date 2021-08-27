/*eslint-disable*/
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

// reactstrap components
import { Container } from 'reactstrap';

// core components

function FooterDefault() {
  return (
    <>
      <footer className='footer footer-default'>
        <Container>
          <nav>
            <ul>
              <li>
                <Link to='/'>Trey Cooper</Link>
              </li>
              <li>
                <Link to='/'>About Me</Link>
              </li>
            </ul>
          </nav>
          <div className='copyright' id='copyright'>
            © {new Date().getFullYear()}, Designed and Coded by{' '}
            <a href='https://www.github.com/cooper6101' target='_blank'>
              Trey Cooper
            </a>
            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default FooterDefault;
