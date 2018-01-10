import React from 'react';
import { Route } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import LandingPage from './landing';
import About from './about';

const App = () => (
  <div className="Site">
    <Header />
    <div className="Site-content">
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/about" component={About} />
    </div>
    <Footer />
  </div>
);

export default App;
