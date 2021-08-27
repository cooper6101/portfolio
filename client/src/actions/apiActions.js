import axios from 'axios';
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

// Send Twilio Message
export const sendTwilioMessage = (
  firstName,
  lastName,
  phone,
  message
) => async (dispatch) => {
  try {
    dispatch({ type: SEND_TWILIO_MESSAGE_REQUEST });

    const { data } = await axios.post(`/api/api-routes/send-twilio-message`, {
      firstName,
      lastName,
      phone,
      message
    });

    dispatch({
      type: SEND_TWILIO_MESSAGE_SUCCESS,
      payload: data.msg
    });
  } catch (error) {
    dispatch({
      type: SEND_TWILIO_MESSAGE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

// Send Get Vimeo Showcase
export const getVimeoShowcase = () => async (dispatch) => {
  try {
    dispatch({ type: GET_VIMEO_SHOWCASE_REQUEST });

    const { data } = await axios.get(`/api/api-routes/get-vimeo-showcase`);

    dispatch({
      type: GET_VIMEO_SHOWCASE_SUCCESS,
      payload: data.showcase
    });
  } catch (error) {
    dispatch({
      type: GET_VIMEO_SHOWCASE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

// Send Sendgrid Email
export const sendSendgridEmail = (
  firstName,
  lastName,
  email,
  message
) => async (dispatch) => {
  try {
    dispatch({ type: SEND_SENDGRID_EMAIL_REQUEST });

    const { data } = await axios.post(`/api/api-routes/send-sendgrid-email`, {
      firstName,
      lastName,
      email,
      message
    });

    dispatch({
      type: SEND_SENDGRID_EMAIL_SUCCESS,
      payload: data.msg
    });
  } catch (error) {
    dispatch({
      type: SEND_SENDGRID_EMAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
