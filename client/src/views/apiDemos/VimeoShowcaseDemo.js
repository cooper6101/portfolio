import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Vimeo from '@u-wave/react-vimeo';
import FadeIn from 'react-fade-in';

import { Container, Row, Col, Spinner, UncontrolledAlert } from 'reactstrap';

import { getVimeoShowcase } from 'actions/apiActions';

const VimeoShowcaseDemo = () => {
  const [index, setIndex] = useState(1);

  const dispatch = useDispatch();

  const vimeoShowcaseObject = useSelector((state) => state.vimeoShowcaseObject);
  const { showcase, loading, error } = vimeoShowcaseObject;

  useEffect(() => {
    if (!showcase) {
      dispatch(getVimeoShowcase());
    }
  }, [showcase, dispatch]);

  const carouselHandler = (d) => {
    if (d === 'next' && index < 3) {
      setIndex(index + 1);
    } else if (d === 'prev' && index > 1) {
      setIndex(index - 1);
    }
  };

  return (
    <div className='section' id='vimeo-api-demo'>
      <Container>
        <div className='title text-center'>
          <h4>Vimeo Showcase</h4>
        </div>
        <Row>
          <Col
            xs='2'
            className='align-items-center d-flex justify-content-center'
          >
            <i
              className='now-ui-icons arrows-1_minimal-left'
              style={{
                color: 'lightgray',
                fontSize: '4rem',
                cursor: 'pointer'
              }}
              onClick={() => carouselHandler('prev')}
            />
          </Col>
          <Col xs='8' className='align-items-center d-flex flex-column'>
            {loading && <Spinner color='info' size='lg' />}
            {error && (
              <UncontrolledAlert color='danger'>
                Uh Oh! - {error}
              </UncontrolledAlert>
            )}
            {showcase?.data?.length > 1 && (
              <FadeIn>
                <Vimeo
                  video={showcase?.data[index - 1]?.uri?.substring(8)}
                  autoplay
                  responsive
                />
                <p className='title text-center'>
                  {showcase?.data[index - 1]?.name}
                </p>
                <p className='description-dark text-center'>
                  {showcase?.data[index - 1]?.description}
                </p>
              </FadeIn>
            )}
          </Col>
          <Col
            xs='2'
            className='align-items-center d-flex justify-content-center'
          >
            <i
              className='now-ui-icons arrows-1_minimal-right'
              style={{
                color: 'lightgray',
                fontSize: '4rem',
                cursor: 'pointer'
              }}
              onClick={() => carouselHandler('next')}
            />
          </Col>
        </Row>
        <p className='text-default text-center mt-5'>
          *** These videos are pulled from a Vimeo showcase via the Vimeo API.
          Their state is stored using redux. From the showcase data I have
          distributed the video URI's over a carousel of video components.
          <br />
          <br />
          Check out{' '}
          <a href='https://www.pexels.com/' target='_blank' rel='noreferrer'>
            Pexels
          </a>{' '}
          for stock videos if you're interested to know where I got these clips
          from. ***
        </p>
      </Container>
    </div>
  );
};

export default VimeoShowcaseDemo;
