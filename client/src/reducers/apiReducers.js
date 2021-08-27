import {
  SEND_TWILIO_MESSAGE_REQUEST,
  SEND_TWILIO_MESSAGE_SUCCESS,
  SEND_TWILIO_MESSAGE_FAIL,
  GET_VIMEO_SHOWCASE_REQUEST,
  GET_VIMEO_SHOWCASE_SUCCESS,
  GET_VIMEO_SHOWCASE_FAIL,
  SEND_SENDGRID_EMAIL_REQUEST,
  SEND_SENDGRID_EMAIL_SUCCESS,
  SEND_SENDGRID_EMAIL_FAIL
} from '../constants/apiConstants';

export const sendTwilioMessageReducer = (state = {}, action) => {
  switch (action.type) {
    case SEND_TWILIO_MESSAGE_REQUEST:
      return { loading: true };
    case SEND_TWILIO_MESSAGE_SUCCESS:
      return {
        loading: false,
        msg: action.payload
      };
    case SEND_TWILIO_MESSAGE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getVimeoShowcaseReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_VIMEO_SHOWCASE_REQUEST:
      return { loading: true };
    case GET_VIMEO_SHOWCASE_SUCCESS:
      return {
        loading: false,
        showcase: action.payload
      };
    case GET_VIMEO_SHOWCASE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const sendSendgridEmailReducer = (state = {}, action) => {
  switch (action.type) {
    case SEND_SENDGRID_EMAIL_REQUEST:
      return { loading: true };
    case SEND_SENDGRID_EMAIL_SUCCESS:
      return {
        loading: false,
        msg: action.payload
      };
    case SEND_SENDGRID_EMAIL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
