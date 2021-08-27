import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  CardHeader,
  CardTitle,
  CardBody,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  FormGroup,
  Label,
  Button,
  UncontrolledAlert,
  Spinner
} from 'reactstrap';
import { sendTwilioMessage } from 'actions/apiActions';

const TwilioDemo = () => {
  const [first1Focus, setFirst1Focus] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [last1Focus, setLast1Focus] = useState(false);
  const [lastName, setLastName] = useState('');
  const [phone1Focus, setPhone1Focus] = useState(false);
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [robotCheck, setRobotCheck] = useState(true);
  const [robotMsg, setRobotMsg] = useState('');

  const dispatch = useDispatch();

  const twilioMessageObject = useSelector((state) => state.twilioMessageObject);
  const { msg, loading, error } = twilioMessageObject;

  const submitHandler = (e) => {
    e.preventDefault();

    if (robotCheck) {
      setRobotMsg('Nice Try Robot!');
      return;
    } else {
      setRobotMsg(`Yay you're not a robot`);
      dispatch(sendTwilioMessage(firstName, lastName, phone, message));

      setFirstName('');
      setLastName('');
      setPhone('');
      setMessage('');
      return;
    }
  };

  return (
    <div
      className='contactus-1 section-image'
      style={{
        backgroundImage:
          'url(' + require('assets/img/textingBg.jpeg').default + ')'
      }}
      id='twilio-api-demo'
    >
      <Container>
        <Row>
          <Col md='5'>
            <h2 className='title'>Twilio Demo</h2>
            <h4 className='description'>
              Use this form to send yourself a text message! This form utilizes
              Twilio's API to send text messages to a single user.
            </h4>
            <div className='info info-horizontal'>
              <div className='icon icon-info'>
                <i className='now-ui-icons tech_mobile'></i>
              </div>
              <div className='description'>
                <h4 className='info-title'>Customized Message</h4>
                <p className='description'>
                  In the real world you'll need to send customized messaging to
                  your clients/users for marketing or followup.
                </p>
              </div>
            </div>
            <div className='info info-horizontal'>
              <div className='icon icon-info'>
                <i className='now-ui-icons users_single-02'></i>
              </div>
              <div className='description'>
                <h4 className='info-title'>Personalized</h4>
                <p className='description'>
                  It's always best to use your clients name if possible so your
                  messaging seems personalized.
                </p>
              </div>
            </div>
          </Col>
          <Col className='ml-auto mr-auto' md='5'>
            <Card className='card-contact card-raised'>
              <Form id='contact-form1' onSubmit={submitHandler}>
                <CardHeader className='text-center'>
                  <CardTitle tag='h4'>Text Yourself</CardTitle>
                </CardHeader>
                <CardBody>
                  {msg && (
                    <UncontrolledAlert color='success'>
                      Your message has been sent!
                    </UncontrolledAlert>
                  )}
                  {error && (
                    <UncontrolledAlert color='danger'>
                      Uh Oh! - {error}
                    </UncontrolledAlert>
                  )}
                  <Row>
                    <Col className='pr-2' md='6'>
                      <label>First name</label>
                      <InputGroup
                        className={first1Focus ? 'input-group-focus' : ''}
                      >
                        <InputGroupAddon addonType='prepend'>
                          <InputGroupText>
                            <i className='now-ui-icons users_circle-08'></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          aria-label='First Name...'
                          autoComplete='given-name'
                          placeholder='First Name...'
                          type='text'
                          onFocus={() => setFirst1Focus(true)}
                          onBlur={() => setFirst1Focus(false)}
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        ></Input>
                      </InputGroup>
                    </Col>
                    <Col className='pl-2' md='6'>
                      <FormGroup>
                        <label>Last name</label>
                        <InputGroup
                          className={last1Focus ? 'input-group-focus' : ''}
                        >
                          <InputGroupAddon addonType='prepend'>
                            <InputGroupText>
                              <i className='now-ui-icons text_caps-small'></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            aria-label='Last Name...'
                            autoComplete='family-name'
                            placeholder='Last Name...'
                            type='text'
                            onFocus={() => setLast1Focus(true)}
                            onBlur={() => setLast1Focus(false)}
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                          ></Input>
                        </InputGroup>
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup>
                    <label>Phone Number</label>
                    <InputGroup
                      className={phone1Focus ? 'input-group-focus' : ''}
                    >
                      <InputGroupAddon addonType='prepend'>
                        <InputGroupText>
                          <i className='now-ui-icons tech_mobile'></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        autoComplete='tel'
                        placeholder='Phone Number...'
                        type='tel'
                        maxLength='10'
                        minLength='10'
                        onFocus={() => setPhone1Focus(true)}
                        onBlur={() => setPhone1Focus(false)}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      ></Input>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <label>Your message</label>
                    <Input
                      id='message'
                      name='message'
                      rows='6'
                      type='textarea'
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></Input>
                  </FormGroup>
                  <Row>
                    <Col md='6'>
                      <FormGroup check>
                        <Label check>
                          <Input
                            type='checkbox'
                            onChange={() => setRobotCheck(!robotCheck)}
                          ></Input>
                          <span className='form-check-sign'></span>
                          {robotMsg && robotCheck ? (
                            <p className='text-danger'>{robotMsg}</p>
                          ) : robotMsg && !robotCheck ? (
                            <p className='text-success'>{robotMsg}</p>
                          ) : (
                            <p>I'm not a robot</p>
                          )}
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col md='6'>
                      <Button
                        className='btn-round pull-right'
                        color='info'
                        type='submit'
                      >
                        {loading ? (
                          <span>
                            Sending... <Spinner size='sm' color='info' />
                          </span>
                        ) : (
                          <span>Send Message</span>
                        )}
                      </Button>
                    </Col>
                  </Row>
                </CardBody>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TwilioDemo;
