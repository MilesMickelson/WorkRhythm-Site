
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
import About from './components/about';
import Info from './components/info';
import Tips from './components/tips';
import Features from './components/features';
import Contact from './components/contact';
import Footer from './components/footer';

setConfig({
  showReactDomPatchNotification: false
});

const App = () => {
  return (
    <>
      <Title />
      <Sticky style={ { zIndex: '9999' } }>
        <NavBar />
      </Sticky>
      <Router>
        <ScrollToTop />
        <Route exact path='/' component={ About } />
        <Route exact path='/Info' component={ Info } />
        <Route exact path='/Tips' component={ Tips } />
        <Route exact path='/Features' component={ Features } />
        <Route exact path='/Contact' component={ Contact } />
      </Router>
      <Footer />
    </>
  );
};
export default hot(module)(App);
