import React, { useEffect } from 'react';
// javascript library that creates a parrallax effect
import Rellax from 'rellax';

import { Row, Col, Container } from 'reactstrap';

//components
import ScrollTransparentNavbar from 'components/Navbars/ScrollTransparentNavbar';
import Header from './Header';
import FooterDefault from 'components/Footers/FooterDefault';

const Landing = () => {
  useEffect(() => {
    document.body.classList.add('presentation-page');
    document.body.classList.add('sidebar-collapse');
    document.documentElement.classList.remove('nav-open');
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;

    // initialise Rellax for this page
    if (window.innerWidth >= 991) {
      setTimeout(function () {
        new Rellax('.rellax', {
          center: true
        });
      }, 5000);
      new Rellax('.rellax-header');
      new Rellax('.rellax-text');
    }

    // we need to add a script for the github buttons
    let script = document.createElement('script');
    script.src = 'https://buttons.github.io/buttons.js';
    script.id = 'github-buttons-script-id';
    document.body.appendChild(script);

    return function cleanup() {
      document.body.classList.remove('presentation-page');
      document.body.classList.remove('sidebar-collapse');

      // we need to remove the script when we change the page
      script.parentNode.removeChild(script);
    };
  });
  return (
    <>
      <ScrollTransparentNavbar />
      <div className='wrapper'>
        <Header />
        <div className='section section-about-us'>
          <Container>
            <Row>
              <Col className='ml-auto mr-auto text-center' md='8'>
                <h2 className='title'>Who am I?</h2>
                <h5 className='description description-dark'>
                  I have a very diverse background spanning a variety of
                  careers. It took a while to find my true passion but coding is
                  where my heart finally landed. I have been a lifeguard, Police
                  Officer, Personal Trainer, Account Executive, Sales Manager,
                  and even co-founded two companies! One of which is still
                  growing today.
                </h5>
              </Col>
            </Row>
            <div className='separator separator-info'></div>
            <div className='section-story-overview'>
              <Row>
                <Col md='6'>
                  <div
                    className='image-container image-left'
                    style={{
                      backgroundImage:
                        'url(' +
                        require('assets/img/computerDev.jpeg').default +
                        ')'
                    }}
                  >
                    <p className='blockquote blockquote-info'>
                      "The computer was born to solve problems that did not
                      exist before." <br></br>
                      <br></br>
                      <small>-Bill Gates</small>
                    </p>
                  </div>
                  <div
                    className='image-container image-left-bottom'
                    style={{
                      backgroundImage:
                        'url(' +
                        require('assets/img/javascriptCode.jpeg').default +
                        ')'
                    }}
                  ></div>
                </Col>
                <Col md='5'>
                  <div
                    className='image-container image-right'
                    style={{
                      backgroundImage:
                        'url(' +
                        require('assets/img/cityScape.jpeg').default +
                        ')'
                    }}
                  ></div>
                  <h3>So what am I actually focused on and good at</h3>
                  <p>
                    Fundamentally, I have experience (and proficiency) in a
                    variety of languages and applications. I prefer to use the
                    MERN stack (Mongoose, Express, React, Node). I have been
                    developing with this stack for around 4 years now. I've been
                    developing in Node, Express, and MongoDB for 5 years.
                    Additionally I have 4 plus years of experience working with
                    variety of API's including Twilio, Vimeo, Stripe, Paypal,
                    Sendgrid, and more.
                  </p>
                  <p>
                    While it's important to have a preexisting understanding of
                    languages and frameworks I believe the ability to adapt and
                    learn quickly is my greatest asset. I love to learn new
                    API's, frameworks, and languages, and I welcome the
                    opportunity to tackle new challenges with your organization.
                  </p>
                  <p>
                    The last thing I'll say before encouraging you to check out
                    the live API demos I have on this site is this; I believe
                    organizations thrive the best when they have an open,
                    coachable atmosphere. I love to learn and would welcome a
                    position that encouraged my growth as a developer while
                    allowing me the freedom to add my own ideas where they make
                    sense. I look forward to hearing from you!
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <FooterDefault />
      </div>
    </>
  );
};

export default Landing;
