import React, { createRef, useEffect } from 'react';

// reactstrap components
import { Row, Col } from 'reactstrap';

// core components

const CalendlyHeader = () => {
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
              'url(' +
              require('assets/img/developmentMeeting.jpeg').default +
              ')'
          }}
          ref={pageHeader}
        ></div>
        <div className='content-center'>
          <Row>
            <Col className='ml-auto mr-auto' md='8'>
              <h1 className='title' style={{ textShadow: '2px 2px #000' }}>
                Book a Meeting
              </h1>
              <h4 style={{ textShadow: '2px 2px #000' }}>
                Chat with me about a full time position with your company,
                co-founding your new startup, or just developing your next
                project.
              </h4>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default CalendlyHeader;
