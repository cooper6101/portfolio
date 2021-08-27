import React, { createRef, useEffect } from 'react';

// reactstrap components
import { Button, Row, Col } from 'reactstrap';

// core components

const DemoWorkHeader = () => {
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
        <div
          className='page-header-image'
          style={{
            backgroundImage:
              'url(' + require('assets/img/highMeditation.jpeg').default + ')'
          }}
          ref={pageHeader}
        ></div>
        <div className='content-center'>
          <Row>
            <Col className='ml-auto mr-auto text-center' md='8'>
              <h2 className='title'>
                A collection of some of my previous work for you to view
              </h2>
              <Button className='btn-round btn-icon mr-1' color='info'>
                <i className='fab fa-github'></i>
              </Button>
              <Button className='btn-round btn-icon' color='info'>
                <i className='fab fa-linkedin'></i>
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default DemoWorkHeader;
