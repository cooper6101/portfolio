import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

// styles
import 'assets/css/bootstrap.min.css';
import 'assets/scss/now-ui-kit.scss?v=1.5.0';
import 'assets/demo/demo.css?v=1.5.0';
import 'assets/demo/react-demo.css?v=1.5.0';
import 'assets/demo/nucleo-icons-page-styles.css?v=1.5.0';
import 'assets/css/index.css';
// pages
import Landing from 'views/landing/Landing.js';
import ApiDemos from 'views/apiDemos/ApiDemos.js';
import DemoWork from 'views/demoWork/DemoWork';
import Calendly from 'views/calendly/Calendly';
// others

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/api-demos' render={(props) => <ApiDemos {...props} />} />
        <Route
          path='/view-my-work'
          render={(props) => <DemoWork {...props} />}
        />
        <Route
          path='/book-with-me'
          render={(props) => <Calendly {...props} />}
        />
        <Route path='/' render={(props) => <Landing {...props} />} />
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
