import React, { useEffect } from "react";
import Web3 from 'web3';
import { addUser } from "./APIFunctions/User";
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
import Login from "./Pages/Login";
import Logout from "./Pages/Logout";

// DEPRECATED
// import Login from "./Components/Authentication/Login";
// import Register from "./Components/Authentication/Register";

// API Functions
// import { findUserByToken } from './APIFunctions/User';

// Components
import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";

export default function App() {
  // componentDidMount = async () => {
  //   //sauce: https://dev.to/jacobedawson/build-a-web3-dapp-in-react-login-with-metamask-4chp
  //   // https://medium.com/coinmonks/web3-react-connect-users-to-metamask-or-any-wallet-from-your-frontend-241fd538ed39
  //   console.log("here");
  //   // const web3 = new Web3(Web3.givenProvider || "http//localhost:8545");
  //   // const network = await web3.eth.net.getNetworkType();
  //   // const accounts = await web3.eth.getAccounts();

  //   // console.log("Network:", network);
  //   // console.log("Accounts:", accounts);
  //   // console.log("hm", web3.currentProvider.isMetaMask);

  //   if (localStorage.getItem('user') === null) {
  //     localStorage.setItem('user', '');
  //     localStorage.setItem('authenticated', 'false');
  //     localStorage.setItem('firstSession', 'true');
  //   }
  //   if (localStorage.getItem('firstSession') === 'true'
  //     && localStorage.getItem('token') !== null) {
  //     const res = await findUserByToken(localStorage.getItem('token'));
  //     // console.log(res);
  //     if (res) {
  //       localStorage.setItem('user', res.username);
  //       localStorage.setItem('authenticated', 'true');
  //     }
  //     localStorage.setItem('firstSession', 'false');
  //   }

  //   // for testing purposes only (leave it commented)
  //   // localStorage.clear();
  // }

  const handleAddUser = async (account) => {
    const user = {
      address: account
    }
    const res = await addUser(user);
    if (!res) {
      console.log('Error');
    }
  }

  const fetchBlockchain = async () => {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const network = await web3.eth.net.getNetworkType(); // Network you're connected to
    const accounts = await web3.eth.getAccounts(); // Array of accounts
    if (accounts.length !== 0) {
      localStorage.setItem('authenticated', true);
      if (localStorage.getItem('addUser') === 'true') {
        console.log(accounts[0]);
        handleAddUser(accounts[0]);
        localStorage.setItem('addUser', 'false');
      }
    }
  }

  useEffect(() => {
    fetchBlockchain();
    // localStorage.clear();
  }, [fetchBlockchain]);

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
