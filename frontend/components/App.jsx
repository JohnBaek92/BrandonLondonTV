import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import LandingPage from "./landingPage/Landing";
import About from "./about/About";
import Joso from "./joso/Joso";
import Press from "./press/Press";
import Blog from "./blog/Blog.jsx";
import BlogShow from "./blog/BlogShow.jsx";
import LondonAthletic from "./londonAthletic/LondonAthletic";
import Contact from "./contact/Contact";
import RecentWork from "./entertainment/Entertainment";
import { HashRouter } from "react-router-dom";

var proto = Object.create(HTMLElement.prototype, {
  name: {
    get: function() {
      return "React HTML Comment";
    }
  },
  createdCallback: {
    value: function() {
      /**
       * Firefox fix, is="null" prevents attachedCallback
       * @link https://github.com/WebReflection/document-register-element/issues/22
       */
      this.is = "";
      this.removeAttribute("is");
    }
  },
  attachedCallback: {
    value: function() {
      this.outerHTML = "<!--" + this.textContent + "-->";
    }
  }
});
document.registerElement("react-comment", { prototype: proto });

class App extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <HashRouter>
        <div className="Site">
        <react-comment>Created By John Baek (http://johnbaek.life) and Wadah Adlan (http://wadah.us)</react-comment>
          <Header />
          <div className="header-space" />

          <div className="container Site-content">
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/about" component={About} />
              <Route exact path="/joso" component={Joso} />
              <Route exact path="/press" component={Press} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/blog/:id" component={BlogShow} />
              <Route exact path="/london-athletic" component={LondonAthletic} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/recent-work" component={RecentWork} />
            </Switch>
          </div>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
