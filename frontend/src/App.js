import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import "./App.css";

// Pages
import HomePage from "./Pages/HomePage";
import ManageAccountPage from "./Pages/ManageAccountPage";
import ErrorPage from "./Pages/ErrorPage";
import BlogPage from "./Pages/BlogPage";
import BrowsePage from "./Pages/BrowsePage";
import TestPage from "./Pages/TestPage";
import UserProfilesPage from "./Pages/UserProfilesPage";
import CreateCollectiblePage from "./Pages/CreateCollectiblePage";
import Login from "./Components/Authentication/Login";
import Register from "./Components/Authentication/Register";
import Logout from "./Pages/Logout";

// API Functions
import { findUserByToken } from './APIFunctions/User';

// Components
import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = async () => {
    if (localStorage.getItem('user') === null) {
      localStorage.setItem('user', '');
      localStorage.setItem('authenticated', 'false');
      localStorage.setItem('firstSession', 'true');
    }
    if (localStorage.getItem('firstSession') === 'true'
      && localStorage.getItem('token') !== null) {
      const res = await findUserByToken(localStorage.getItem('token'));
      // console.log(res);
      if (res) {
        localStorage.setItem('user', res.username);
        localStorage.setItem('authenticated', 'true');
      }
      localStorage.setItem('firstSession', 'false');
    }

    // for testing purposes only (leave it commented)
    // localStorage.clear();
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/error" exact component={ErrorPage} />
              <Route path="/blog-page" exact component={BlogPage} />
              <Route path="/browse" exact component={BrowsePage} />
              <Route path="/test" exact component={TestPage} />
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
              <Route path="/logout" exact component={Logout} />
              <PrivateRoute
                path="/manage-account"
                exact
                component={ManageAccountPage}
              />
              <PrivateRoute
                path="/create-collectible"
                exact
                component={CreateCollectiblePage}
              />
              <PrivateRoute
                path="/profile"
                exact
                component={UserProfilesPage}
              />

            </Switch>
            {/* <Footer /> */}
          </div>
        </Router>
        {/* <footer>
          <Footer />
        </footer> */}
        {/* <div>
          <Footer />
        </div> */}
      </div>
    );
  }
}
