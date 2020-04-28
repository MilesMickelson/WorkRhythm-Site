
import React from 'react';
import { hot, setConfig } from 'react-hot-loader';

import {
  HashRouter as Router,
  Route
} from 'react-router-dom';

import Sticky from 'react-sticky-el';

import Title from './components/title';
import NavBar from './components/navbar';
import ScrollToTop from './components/scrolltotop';
import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';
import Page4 from './components/page4';
import Footer from './components/footer';

setConfig({
  showReactDomPatchNotification: false
});

const App = () => {
  return (
    <>
      <Title />
      {/* <Sticky style={ { zIndex: '9999' } }>
        <NavBar />
      </Sticky>
      <Router>
        <ScrollToTop />
        <Route exact path='/' component={ Page1 } />
        <Route exact path='/Page2' component={ Page2 } />
        <Route exact path='/Page3' component={ Page3 } />
        <Route exact path='/Page4' component={ Page4 } />
      </Router>
      <Footer /> */}
    </>
  );
};
export default hot(module)(App);
