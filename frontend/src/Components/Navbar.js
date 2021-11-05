import React, { Component } from "react";
import "./Navbar.css";
import Input from "./Input";
import NavbarUserButton from "./NavbarUserButton";

export default class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/" className="options-text">
            CryptoPlace
          </a>
        </div>
        <Input
          type="navbar-search"
          placeholder="Search collectibles and accounts"
        />
        <div className="navbar-options">
          <a href="/blog-page" className="options-text">
            Blog Page
          </a>
          <a href="/browse" className="options-text">
            Browse
          </a>
          <a href="/create-collectible" className="options-text">
            Create Collectible
          </a>
          <a href="/manage-account" className="options-text">
            Manage Account
          </a>
        </div>
        <NavbarUserButton />
      </div>
    );
  }
}
