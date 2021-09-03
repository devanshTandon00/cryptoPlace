import React, { Component } from 'react';
import './Navbar.css'
export default class Navbar extends Component {
  state = {  }
  render() { 
    return ( 
      <div className='navbar-container'>
        <div className='navbar-logo'>
          <a href='/' className='options-text'>
            CryptoPlace
          </a>
        </div>
        <input 
          className='navbar-search'
          placeholder='Search collectibles and accounts'
        />
        <div className='navbar-options'>
         <a href='/blog-page' className='options-text'>
            Blog Page
          </a>
          <a href='/browse' className='options-text'>
            Browse
          </a>
          <a href='/create-collectible' className='options-text'>
            Create Collectible
          </a>
          <a href='/manage-account' className='options-text'>
            Manage Account
          </a>
          <a href='/profile'>
            <img className="profile-img"/>
          </a>
        </div>    
      </div>
    );
  }
}
