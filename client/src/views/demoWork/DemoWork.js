import React, { useEffect } from 'react';

// reactstrap components
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col
} from 'reactstrap';

// core components
import DemoWorkHeader from './DemoWorkHeader';
import ScrollTransparentNavbar from 'components/Navbars/ScrollTransparentNavbar';
import FooterDefault from 'components/Footers/FooterDefault';

const DemoWork = () => {
  useEffect(() => {
    document.body.classList.add('blog-posts');
    document.body.classList.add('sidebar-collapse');
    document.documentElement.classList.remove('nav-open');
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove('blog-posts');
      document.body.classList.remove('sidebar-collapse');
    };
  }, []);
  return (
    <>
      <ScrollTransparentNavbar />
      <div className='wrapper'>
        <DemoWorkHeader />
        <div className='projects-4'>
          <Container fluid>
            <Row>
              <Col className='px-0' md='6'>
                <Card
                  className='card-fashion card-background'
                  style={{
                    backgroundImage:
                      'url(' + require('assets/img/deadlift.jpeg').default + ')'
                  }}
                >
                  <CardBody>
                    <CardTitle className='text-left' tag='div'>
                      <h2>
                        <a
                          href='https://www.mnmlhealth.com'
                          target='_blank'
                          rel='noreferrer'
                        >
                          MNML Health - a personal trainer in the palm of your
                          hand
                        </a>
                      </h2>
                    </CardTitle>
                    <CardFooter className='text-left'>
                      <div className='stats'>
                        <span>
                          <i className='now-ui-icons users_circle-08'></i>
                          CTO: Trey Cooper
                        </span>
                        <span>
                          <i className='now-ui-icons users_circle-08'></i>
                          CEO: John Schaefer
                        </span>
                      </div>
                      <div className='stats-link pull-right'>
                        <a
                          className='footer-link'
                          href='https://www.mnmlhealth.com'
                          target='_blank'
                          rel='noreferrer'
                        >
                          Fitness
                        </a>
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col className='px-0' md='3'>
                <Card className='card-fashion'>
                  <CardTitle tag='div'>
                    <h4>
                      <a
                        href='https://www.mnmlenterprise.com'
                        target='_blank'
                        rel='noreferrer'
                      >
                        MNML Enterprise - Corporate Wellness Re-imagined
                      </a>
                    </h4>
                  </CardTitle>
                  <CardBody>
                    <CardFooter>
                      <div className='stats'>
                        <span>
                          <i className='now-ui-icons users_circle-08'></i>
                          CTO: Trey Cooper
                        </span>
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col className='px-0' md='3'>
                <Card
                  className='card-fashion card-background'
                  style={{
                    backgroundImage:
                      'url(' +
                      require('assets/img/groupFitness.jpeg').default +
                      ')'
                  }}
                ></Card>
              </Col>
            </Row>
            <Row>
              <Col className='px-0' md='3'>
                <Card
                  className='card-fashion card-background'
                  style={{
                    backgroundImage:
                      'url(' + require('assets/img/spotify.jpeg').default + ')'
                  }}
                ></Card>
              </Col>
              <Col className='px-0' md='3'>
                <Card className='card-fashion arrow-left'>
                  <CardTitle tag='div'>
                    <h4>
                      <a
                        href='https://cooper6101-spotify-clone.netlify.app'
                        target='_blank'
                        rel='noreferrer'
                      >
                        Spotify Clone (Nonfunctional)
                      </a>
                    </h4>
                  </CardTitle>
                  <CardBody>
                    <CardFooter>
                      <div className='stats'>
                        <span>
                          <i className='now-ui-icons users_circle-08'></i>
                          Trey Cooper
                        </span>
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col className='px-0' md='6'>
                <Card
                  className='card-fashion card-background'
                  style={{
                    backgroundImage:
                      'url(' + require('assets/img/netflix.jpeg').default + ')'
                  }}
                >
                  <CardBody>
                    <CardTitle className='text-left' tag='div'>
                      <h2>
                        <a
                          href='https://cooper6101-netflix-clone.netlify.app'
                          target='_blank'
                          rel='noreferrer'
                        >
                          Netflix Clone (Nonfunctional)
                        </a>
                      </h2>
                    </CardTitle>
                    <CardFooter className='text-left'>
                      <div className='stats'>
                        <span>
                          <i className='now-ui-icons users_circle-08'></i>
                          Trey Cooper
                        </span>
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='main'>
          <Container>
            <div className='section'>
              <h3 className='title text-center'>Additional Projects</h3>
              <br></br>
              <Row>
                <Col md='4'>
                  <Card className='card-plain card-blog'>
                    <div className='card-image'>
                      <a
                        href='https://cooper6101-github-finder.netlify.app'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <img
                          alt='...'
                          className='img rounded img-raised'
                          src={require('assets/img/githubFinder.jpeg').default}
                        ></img>
                      </a>
                    </div>
                    <CardBody>
                      <h6 className='category text-info'>
                        Github Profile Finder
                      </h6>
                      <CardTitle tag='h4'>
                        <a
                          href='https://cooper6101-github-finder.netlify.app'
                          target='_blank'
                          rel='noreferrer'
                        >
                          Application for finding and rendering github profile
                          information
                        </a>
                      </CardTitle>
                      <p className='card-description description-dark'>
                        This react application uses Github's API to pull user
                        data and display their profile information. This
                        application is a standalone react app.
                      </p>
                      <div className='author'>
                        <img
                          alt='...'
                          className='avatar img-raised'
                          src={require('assets/img/olivia.jpg').default}
                        ></img>
                        <span>Trey Cooper</span>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col md='4'>
                  <Card className='card-plain card-blog'>
                    <div className='card-image'>
                      <a
                        href='https://treys-it-logger.herokuapp.com/'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <img
                          alt='...'
                          className='img rounded img-raised'
                          src={require('assets/img/itLogger.jpeg').default}
                        ></img>
                      </a>
                    </div>
                    <CardBody>
                      <h6 className='category text-success'>It Logger</h6>
                      <CardTitle tag='h4'>
                        <a
                          href='https://treys-it-logger.herokuapp.com/'
                          target='_blank'
                          rel='noreferrer'
                        >
                          Application for logging IT tickets
                        </a>
                      </CardTitle>
                      <p className='card-description description-dark'>
                        This application is a standalone react app that uses
                        redux to store and complete IT tickets.
                      </p>
                      <div className='author'>
                        <img
                          alt='...'
                          className='avatar img-raised'
                          src={require('assets/img/michael.jpg').default}
                        ></img>
                        <span>Trey Cooper</span>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col md='4'>
                  <Card className='card-plain card-blog'>
                    <div className='card-image'>
                      <a
                        href='https://limitless-atoll-16043.herokuapp.com/'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <img
                          alt='...'
                          className='img rounded img-raised'
                          src={require('assets/img/devConnector.jpeg').default}
                        ></img>
                      </a>
                    </div>
                    <CardBody>
                      <h6 className='category text-danger'>
                        <i className='now-ui-icons media-2_sound-wave'></i>{' '}
                        DevConnector - Social Media
                      </h6>
                      <CardTitle tag='h4'>
                        <a
                          href='https://limitless-atoll-16043.herokuapp.com/'
                          target='_blank'
                          rel='noreferrer'
                        >
                          A Social Media Application for developers
                        </a>
                      </CardTitle>
                      <p className='card-description description-dark'>
                        This application is a MERN stack application that allows
                        users to create a profile and share information with
                        other developers.
                      </p>
                      <div className='author'>
                        <img
                          alt='...'
                          className='avatar img-raised'
                          src={require('assets/img/james.jpg').default}
                        ></img>
                        <span>Trey Cooper</span>
                      </div>
                    </CardBody>
                  </Card>
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

export default DemoWork;
