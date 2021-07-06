import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import { GlobalStyle } from './GlobalStyles';
import Home from './pages/Home';
import Branding from './pages/Branding';
import Footer from './components/Footer'
import Web from './pages/WebDesign';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <GlobalStyle />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/branding" exact component={Branding} />
          <Route path="/webdesign" exact component={Web} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App;

