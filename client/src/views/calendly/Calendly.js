import React, { useEffect } from 'react';
import FooterDefault from 'components/Footers/FooterDefault';
import ScrollTransparentNavbar from 'components/Navbars/ScrollTransparentNavbar';
import { InlineWidget } from 'react-calendly';
import './calendly.css';
import CalendlyHeader from './CalendlyHeader';

const Calendly = () => {
  useEffect(() => {
    document.body.classList.add('about-us');
    document.body.classList.add('sidebar-collapse');
    document.documentElement.classList.remove('nav-open');
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove('about-us');
      document.body.classList.remove('sidebar-collapse');
    };
  }, []);
  return (
    <div>
      <ScrollTransparentNavbar />
      <CalendlyHeader />
      <div className='cd-section calendly-page'>
        <InlineWidget url='https://calendly.com/mnmlhealth-trey/interview' />
      </div>
      <FooterDefault />
    </div>
  );
};

export default Calendly;
