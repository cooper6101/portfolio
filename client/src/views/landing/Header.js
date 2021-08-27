import React, { createRef, useEffect } from 'react';

// reactstrap components
import { Button, Container } from 'reactstrap';

// core components

function Header() {
  let pageHeader = createRef();
  useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          'translate3d(0,' + windowScrollTop + 'px,0)';
      };
      window.addEventListener('scroll', updateScroll);
      return function cleanup() {
        window.removeEventListener('scroll', updateScroll);
      };
    }
  });
  return (
    <>
      <div className='page-header page-header-small'>
        <div className='landing-header-image' ref={pageHeader}></div>
        <div className='content-center'>
          <Container>
            <h1 className='title'>Welcome to my Portfolio.</h1>
            <p className='title'>
              This site is designed to showcase a variety of my skills. Feel
              free to look around!
            </p>
            <div className='text-center'>
              <a
                href='https://www.github.com/cooper6101'
                target='_blank'
                rel='noreferrer'
              >
                <Button
                  className='btn-icon btn-round mr-1'
                  color='default'
                  size='lg'
                >
                  <i className='fab fa-github'></i>
                </Button>
              </a>
              <a
                href='https://www.linkedin.com/in/trey-cooper-8a231a123/'
                target='_blank'
                rel='noreferrer'
              >
                <Button
                  className='btn-icon btn-round mr-1'
                  color='info'
                  size='lg'
                >
                  <i className='fab fa-linkedin'></i>
                </Button>
              </a>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Header;
