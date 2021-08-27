import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  sendTwilioMessageReducer,
  getVimeoShowcaseReducer,
  sendSendgridEmailReducer
} from './reducers/apiReducers';

const reducer = combineReducers({
  twilioMessageObject: sendTwilioMessageReducer,
  vimeoShowcaseObject: getVimeoShowcaseReducer,
  sendgridEmailObject: sendSendgridEmailReducer
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
