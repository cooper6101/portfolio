import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardTitle
} from 'reactstrap';
import './apiDemos.css';

const ApiHeader = () => {
  const [card1Classname, setCard1Classname] = useState('card-pricing');
  const [card2Classname, setCard2Classname] = useState(
    'card-pricing card-plain'
  );
  const [card3Classname, setCard3Classname] = useState(
    'card-pricing card-plain'
  );
  const [card4Classname, setCard4Classname] = useState(
    'card-pricing card-plain'
  );
  const [button1Classname, setButton1Classname] = useState('btn-round');
  const [button2Classname, setButton2Classname] = useState(
    'btn-neutral btn-round'
  );
  const [button3Classname, setButton3Classname] = useState(
    'btn-neutral btn-round'
  );
  const [button4Classname, setButton4Classname] = useState(
    'btn-neutral btn-round'
  );

  const updateClassname = (card) => {
    if (card === 1) {
      setCard1Classname('card-pricing');
      setCard2Classname('card-pricing card-plain');
      setCard3Classname('card-pricing card-plain');
      setCard4Classname('card-pricing card-plain');
      setButton1Classname('btn-round');
      setButton2Classname('btn-neutral btn-round');
      setButton3Classname('btn-neutral btn-round');
      setButton4Classname('btn-neutral btn-round');
    }
    if (card === 2) {
      setCard1Classname('card-pricing card-plain');
      setCard2Classname('card-pricing');
      setCard3Classname('card-pricing card-plain');
      setCard4Classname('card-pricing card-plain');
      setButton1Classname('btn-neutral btn-round');
      setButton2Classname('btn-round');
      setButton3Classname('btn-neutral btn-round');
      setButton4Classname('btn-neutral btn-round');
    }
    if (card === 3) {
      setCard1Classname('card-pricing card-plain');
      setCard2Classname('card-pricing card-plain');
      setCard3Classname('card-pricing');
      setCard4Classname('card-pricing card-plain');
      setButton1Classname('btn-neutral btn-round');
      setButton2Classname('btn-neutral btn-round');
      setButton3Classname('btn-round');
      setButton4Classname('btn-neutral btn-round');
    }
    if (card === 4) {
      setCard1Classname('card-pricing card-plain');
      setCard2Classname('card-pricing card-plain');
      setCard3Classname('card-pricing card-plain');
      setCard4Classname('card-pricing');
      setButton1Classname('btn-neutral btn-round');
      setButton2Classname('btn-neutral btn-round');
      setButton3Classname('btn-neutral btn-round');
      setButton4Classname('btn-round');
    }
  };
  return (
    <div className='pricing-1 section-image' id='pricing-1'>
      <Container>
        <Row>
          <Col className='ml-auto mr-auto text-center' md='6'>
            <h2 className='title'>
              Check out some of the API's I've worked with
            </h2>
            <h4 className='description'>
              Have an API you'd like me to learn? No problem, I love learning
              new tech and I can't wait to implement solutions for your
              organizations needs!
            </h4>
            <div className='section-space'></div>
          </Col>
        </Row>
        <Row>
          <Col md='3'>
            <Card
              onMouseEnter={() => updateClassname(1)}
              className={card1Classname}
            >
              <CardBody>
                <h5 className='category'>Twilio</h5>
                <div className='icon icon-danger'>
                  <i className='now-ui-icons media-1_button-power'></i>
                </div>
                <CardTitle tag='h3'>SMS API</CardTitle>
                <ul>
                  <li>Send yourself a text</li>
                  <li>Custom Message</li>
                </ul>
                <Link to='#twilio-api-demo'>
                  <Button className={button1Classname} color='danger'>
                    Go To Demo
                  </Button>
                </Link>
              </CardBody>
            </Card>
          </Col>
          <Col md='3'>
            <Card
              onMouseEnter={() => updateClassname(2)}
              className={card2Classname}
            >
              <CardBody>
                <h5 className='category'>Vimeo</h5>
                <div className='icon icon-info'>
                  <i className='now-ui-icons design_image'></i>
                </div>
                <CardTitle tag='h3'>Video API</CardTitle>
                <ul>
                  <li>View Vimeo Playlist</li>
                  <li>Carousel UI</li>
                </ul>
                <Link to='#vimeo-api-demo'>
                  <Button className={button2Classname} color='info'>
                    Go To Demo
                  </Button>
                </Link>
              </CardBody>
            </Card>
          </Col>
          <Col md='3'>
            <Card
              onMouseEnter={() => updateClassname(3)}
              className={card3Classname}
            >
              <CardBody>
                <h5 className='category'>Sendgrid</h5>
                <div className='icon icon-default'>
                  <i className='now-ui-icons ui-1_email-85'></i>
                </div>
                <CardTitle tag='h3'>Email API</CardTitle>
                <ul>
                  <li>Send Yourself an Email</li>
                  <li>Custom Message</li>
                </ul>
                <Link to='#sendgrid-api-demo'>
                  <Button className={button3Classname} color='default'>
                    Go To Demo
                  </Button>
                </Link>
              </CardBody>
            </Card>
          </Col>
          <Col md='3'>
            <Card
              onMouseEnter={() => updateClassname(4)}
              className={card4Classname}
            >
              <CardBody>
                <h5 className='category'>Stripe</h5>
                <div className='icon icon-success'>
                  <i className='now-ui-icons shopping_credit-card'></i>
                </div>
                <CardTitle tag='h3'>Payment API</CardTitle>
                <ul>
                  <li>Complete a Demo Transaction</li>
                  <li>Hosted Checkout</li>
                </ul>
                <Link to='#stripe-api-demo'>
                  <Button className={button4Classname} color='success'>
                    Go To Demo
                  </Button>
                </Link>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ApiHeader;
