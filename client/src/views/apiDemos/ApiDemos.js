import React from 'react';

import FooterDefault from 'components/Footers/FooterDefault';
import ScrollTransparentNavbar from 'components/Navbars/ScrollTransparentNavbar';
import TwilioDemo from './TwilioDemo';
import ApiHeader from './ApiHeader';
import VimeoShowcaseDemo from './VimeoShowcaseDemo';
import SendgridDemo from './SendgridDemo';
import StripeDemo from './StripeDemo';

const ApiDemos = () => {
  return (
    <>
      <ScrollTransparentNavbar />
      <div className='cd-section' id='Twilio'>
        <ApiHeader />
        <TwilioDemo />
        <VimeoShowcaseDemo />
        <SendgridDemo />
        <StripeDemo />
      </div>
      <FooterDefault />
    </>
  );
};

export default ApiDemos;
