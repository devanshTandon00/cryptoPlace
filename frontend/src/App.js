import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
// Components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

// Pages
import HomePage from './Pages/HomePage';
import ManageAccountPage from './Pages/ManageAccountPage';
import OtherPage from './Pages/OtherPage';
import BlogPage from './Pages/BlogPage';
import TestPage from './Pages/TestPage';
import UserProfilesPage from './Pages/UserProfilesPage';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/manage-account" exact component={ManageAccountPage} />
              <Route path="/other-page" exact component={OtherPage} />
              <Route path="/blog-page" exact component={BlogPage} />
              <Route path='/test' exact component={TestPage} />
              <Route path='/userprofiles' exact component={UserProfilesPage} />
            </Switch>
          </div>
        </Router>
        <footer>
          {/* <Footer /> */}
        </footer>
        {/* <div>
          <Footer />
        </div> */}
      </div>
    );
  }
}
